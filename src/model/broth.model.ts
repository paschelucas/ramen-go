import mongoose from "mongoose";
import {MongoBrothSchema} from "../infra/mongo/mongoSchemas";

export const BrothModel = mongoose.model('BrothModel', MongoBrothSchema, 'broths')