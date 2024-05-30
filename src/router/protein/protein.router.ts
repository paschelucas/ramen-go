import {Hono} from "hono";
import {ProteinService} from "../../services/protein.service";
import {ProteinController} from "../../controllers/protein/protein.controller";

const proteinService = new ProteinService()
const proteinController = new ProteinController(proteinService);

export const proteinRouter = new Hono()

// @ts-ignore
proteinRouter.post('/get-all/', async (c) => proteinController.getAllProteins())