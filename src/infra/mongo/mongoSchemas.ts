import {Schema} from "mongoose";

export const MongoBrothSchema = new Schema({
    id: String,
    imageInactive: String,
    imageActive: String,
    name: String,
    description: String,
    price: Number

})

export const MongoProteinSchema = new Schema({
    id: String,
    imageInactive: String,
    imageActive: String,
    name: String,
    description: String,
    price: Number

})

export const MongoOrderSchema = new Schema({
    orderId: String,
    brothId: String,
    proteinId: String,
})