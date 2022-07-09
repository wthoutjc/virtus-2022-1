import mongoose, { Schema, model, Model } from "mongoose";

// Interfaces
import { IModulo } from "../interfaces";

const moduloSchema = new Schema({
  nombre: { type: String, required: true },
});

const Modulo: Model<IModulo> =
  mongoose.models.Modulo || model("Modulo", moduloSchema);

export default Modulo;
