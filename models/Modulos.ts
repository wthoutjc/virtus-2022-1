import mongoose, { Schema, model, Model } from "mongoose";

// Interfaces
import { IModulo } from "../interfaces";

const moduloSchema = new Schema(
  {
    name: { type: String, required: true },
    descripcion: { type: String, required: true },
    keyWords: { type: [String], required: true },
    goals: { type: [String], required: true },
    requirements: { type: [String], required: true },
    content: {
      type: [
        {
          name: { type: String, required: true },
          to: { type: String, required: true },
          description: { type: String, required: true },
          modulo: { type: String, required: true },
          exp: { type: Number, required: true },
          content: { type: String, required: true },
          bibliography: { type: String, required: true },
          time: { type: Number, required: true },
          test: {
            type: {
              name: { type: String, required: true },
              modulo: { type: String, required: true },
              questions: {
                type: [
                  { question: String, answers: [String], correct: Number },
                ],
                required: true,
              },
              exp: { type: Number, required: true },
            },
          },
        },
      ],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Modulo: Model<IModulo> =
  mongoose.models.Modulo || model("Modulo", moduloSchema);

export default Modulo;
