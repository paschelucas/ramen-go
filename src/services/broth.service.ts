import {Broth} from "../types/schemas/schemas";
import {BrothModel} from "../model/broth.model";

export class BrothService {
    public async findAll(): Promise<Broth[]> {
        return BrothModel.find({}, {_id: 0});
    }

    public async findOne(id: string): Promise<Broth | null> {
        return BrothModel.findOne({id})
    }
}