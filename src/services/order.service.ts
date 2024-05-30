import {Context, TypedResponse} from "hono";
import {BrothService} from "./broth.service";
import {ProteinService} from "./protein.service";
import {OrderRequest, OrderRequestSchema, OrderResponse} from "../types/schemas/schemas";
import {ZodError} from "zod";
import {HTTPException} from "hono/http-exception";
import {OrderModel} from "../model/order.model";
// @ts-ignore
import {JSONParsed} from "hono/dist/types/utils/types";



export class OrderService {
    constructor(
        private readonly brothService: BrothService,
        private readonly proteinService: ProteinService
    ) {
    }

    private getOrderIdPayload(): { url: string, key: string } {
        return {
            url: String(process.env.GENERATE_ORDER_ID_URL),
            key: String(process.env.GENERATE_ORDER_ID_API_KEY)
        }
    }

    private async getOrderId(): Promise<string> {
        const rawResponse = await fetch(this.getOrderIdPayload().url, {
            method: 'POST',
            headers: {
                'x-api-key': this.getOrderIdPayload().key
            }
        })

        const id: string[] = Object.values(await rawResponse.json())

        return id[0]
    }

    public async placeOrder(c: Context): Promise<OrderResponse> {
        const {brothId, proteinId}: OrderRequest = await c.req.json()

        try {
            OrderRequestSchema.parse({brothId, proteinId})
            const orderId = await this.getOrderId()
            const foundBroth = await this.brothService.findOne(brothId)
            const foundProtein = await this.proteinService.findOne(proteinId)

            await OrderModel.create({
                orderId,
                brothId,
                proteinId,
            })

            return c.json({
                id: orderId,
                description: `${foundBroth?.name} and ${foundProtein?.name} Ramen`,
                image: 'ramen_image_url'
            }, 201) as unknown as OrderResponse

        } catch (e) {
            if (e instanceof ZodError) {
                throw new HTTPException(400, {
                    message: 'both brothId and proteinId are required'
                })
            }

            throw new HTTPException(500, {
                message: 'could not place order'
            })
        }

    }
}