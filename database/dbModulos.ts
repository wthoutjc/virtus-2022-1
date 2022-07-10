import { db } from "./";
import { Modulos } from "../models";

//Interfaces
import { IModulo, ISubModulo } from "../interfaces";

export const getModulos = async (): Promise<IModulo[]> => {
  await db.connect();
  const modulos = await Modulos.find({}).lean();
  await db.disconnect();

  return JSON.parse(JSON.stringify(modulos));
};

export const getSubmodule = async (id: string): Promise<IModulo> => {
  await db.connect();
  const submodule = await Modulos.findOne({ 'content.to': id }).lean();
  await db.disconnect();

  return JSON.parse(JSON.stringify(submodule));
};
