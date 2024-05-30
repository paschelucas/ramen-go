import {Hono} from "hono";
import {OrderController} from "../../controllers/order.controller";
import {OrderService} from "../../services/order.service";
import {BrothService} from "../../services/broth.service";
import {ProteinService} from "../../services/protein.service";

const brothsService = new BrothService();
const proteinsService = new ProteinService()
const orderService = new OrderService(brothsService, proteinsService);
const orderController = new OrderController(orderService);
export const orderRouter = new Hono()

orderRouter.post('/hello-world/', async (c) => orderController.getAllOrders(c))
orderRouter.post('/create/', async (c) => orderController.placeOrder(c))