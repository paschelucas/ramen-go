import {Protein} from "../types/schemas/schemas";
import {ProteinModel} from "../model/protein.model";

export class ProteinService {
    public async findAll(): Promise<Protein[]> {
        return ProteinModel.find({}, {_id: 0});
    }

    public async findOne(id: string): Promise<Protein | null> {
        return ProteinModel.findOne({id})
    }
}