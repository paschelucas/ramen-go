import {BrothService} from "../../services/broth.service";
import {Broth} from "../../types/schemas/schemas";

export class BrothController {
    constructor(
        private readonly brothService: BrothService
    ) {
    }

    public async getAllBroths(): Promise<Broth[]> {
        return await this.brothService.findAll()
    }
}