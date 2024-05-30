import mongoose from "mongoose";
import {MongoProteinSchema} from "../infra/mongo/mongoSchemas";

export const ProteinModel = mongoose.model('Protein', MongoProteinSchema, 'proteins')