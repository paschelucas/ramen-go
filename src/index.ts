import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import {logger} from "hono/logger";
import {orderRouter} from "./router/order/order.router";
import {configDotenv} from "dotenv";

import mongoose from 'mongoose';
configDotenv()

const uri = "mongodb+srv://test-user:gfbRkttpn9ZiYMmT@challenge-cluster.spicyha.mongodb.net/ramen-go?retryWrites=true&w=majority&appName=challenge-cluster";
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(uri);
}

const app = new Hono()
app.use(logger())


app.route('order', orderRouter)


const port = 3000
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
