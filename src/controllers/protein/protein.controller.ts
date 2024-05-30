import {ProteinService} from "../../services/protein.service";
import {Protein} from "../../types/schemas/schemas";

export class ProteinController {
    constructor(
        private readonly proteinService: ProteinService,
    ) {
    }

    public async getAllProteins(): Promise<Protein[]> {
        return await this.proteinService.findAll();
    }
}