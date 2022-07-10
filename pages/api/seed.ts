import type { NextApiRequest, NextApiResponse } from "next";
import { db, seedDatabase } from "../../database";
import { User, Modulos } from "../../models";

type Data = { message: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (process.env.NODE_ENV === "production") {
    return res.status(401).json({ message: "Not access to API RESTful" });
  }

  await db.connect();

  await User.deleteMany();
  await User.insertMany(seedDatabase.initialData.users);

  await Modulos.deleteMany();
  await Modulos.insertMany(seedDatabase.initialData.modulos);

  await db.disconnect();

  res.status(200).json({ message: "Process done succesfully" });
}
