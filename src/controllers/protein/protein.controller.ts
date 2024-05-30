import {ProteinService} from "../../services/protein.service";
import {Protein} from "../../types/schemas/schemas";
import {Context} from "hono";

export class ProteinController {
    constructor(
        private readonly proteinService: ProteinService,
    ) {
    }

    public async getAllProteins(c: Context) {
        const proteins: Protein[] = await this.proteinService.findAll();
        return c.json(proteins, 200)
    }
}