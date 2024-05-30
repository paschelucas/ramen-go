import {Hono} from "hono";
import {OrderController} from "../../controllers/order/order.controller";
import {OrderService} from "../../services/order.service";
import {BrothService} from "../../services/broth.service";
import {ProteinService} from "../../services/protein.service";

const brothService = new BrothService();
const proteinService = new ProteinService()
const orderService = new OrderService(brothService, proteinService);
const orderController = new OrderController(orderService);
export const orderRouter = new Hono()

// @ts-ignore
orderRouter.post('/create/', async (c) => orderController.placeOrder(c))