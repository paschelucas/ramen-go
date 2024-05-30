import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import {logger} from "hono/logger";
import {orderRouter} from "./router/order/order.router";
import {configDotenv} from "dotenv";

import mongoose from 'mongoose';
import {proteinRouter} from "./router/protein/protein.router";
import {brothRouter} from "./router/broth/broth.router";
configDotenv()

const uri = String(process.env.MONGODB_URL);
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(uri);
}

const app = new Hono()
app.use(logger())


app.route('order', orderRouter)
app.route('broth', brothRouter)
app.route('protein', proteinRouter)


const port = 3000
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
