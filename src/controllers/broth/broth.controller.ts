import {BrothService} from "../../services/broth.service";
import {Broth} from "../../types/schemas/schemas";
import {Context} from "hono";

export class BrothController {
    constructor(
        private readonly brothService: BrothService
    ) {
    }

    public async getAllBroths(c: Context)/*: Promise<Broth[]>*/ {
        const broths: Broth[] = await this.brothService.findAll()
        return c.json(broths, 200)
    }
}