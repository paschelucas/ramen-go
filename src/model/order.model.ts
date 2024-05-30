import mongoose from "mongoose";
import {MongoOrderSchema} from "../infra/mongo/mongoSchemas";

export const OrderModel = mongoose.model('Order', MongoOrderSchema, 'orders')