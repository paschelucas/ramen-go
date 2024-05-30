import {Hono} from "hono";
import {BrothService} from "../../services/broth.service";
import {BrothController} from "../../controllers/broth/broth.controller";

const brothService = new BrothService();
const brothController = new BrothController(brothService);

export const brothRouter = new Hono()

// @ts-ignore
brothRouter.post('/get-all/', async (c) => brothController.getAllBroths(c))