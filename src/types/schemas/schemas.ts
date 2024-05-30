import {z} from "zod";

const BrothSchema = z.object({
    id: z.string(),
    imageInactive: z.string(),
    imageActive: z.string(),
    name: z.string(),
    description: z.string(),
    price: z.number(),
})

const ProteinSchema = z.object({
    id: z.string(),
    imageInactive: z.string(),
    imageActive: z.string(),
    name: z.string(),
    description: z.string(),
    price: z.number(),
})

const OrderResponseSchema = z.object({
    id: z.string(),
    description: z.string(),
    image: z.string(),
})

export const OrderRequestSchema = z.object({
    brothId: z.string(),
    proteinId: z.string(),
})

export type Broth = z.infer<typeof BrothSchema>
export type Protein = z.infer<typeof ProteinSchema>
export type OrderRequest = z.infer<typeof OrderRequestSchema>
export type OrderResponse = z.infer<typeof OrderResponseSchema>

