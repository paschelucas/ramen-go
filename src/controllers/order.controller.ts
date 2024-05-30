import {OrderService} from "../services/order.service";
import {Context} from "hono";

export class OrderController {
    constructor(
        private readonly orderService: OrderService
    ) {
    }

    public async placeOrder(c: Context) {
        return await this.orderService.placeOrder(c)
    }
}