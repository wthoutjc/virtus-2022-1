import bcrypt from "bcryptjs";

import { db } from ".";
import { User } from "../models";

export const checkUserEmailPassword = async (
  email: string,
  password: string
) => {
  await db.connect();
  const user = await User.findOne({ email });
  await db.disconnect();

  if (!user) {
    return null;
  }

  if (!bcrypt.compareSync(password, user.password!)) {
    return null;
  }

  const { _id, role, name, grades, answers } = user;

  return { _id, role, email: email.toLocaleLowerCase(), name, grades, answers };
};

export const OAuthToDbUser = async (OAuthEmail: string, OAuthName: string) => {
  await db.connect();

  const user = await User.findOne({ email: OAuthEmail });

  if (user) {
    await db.disconnect();
    const { _id, name, email, role, grades, answers } = user;
    return { _id, name, email, role, grades, answers };
  }

  const newUser = new User({
    email: OAuthEmail,
    name: OAuthName,
    password: "@",
    role: "teacher",
  });
  await newUser.save();
  await db.disconnect();

  const { _id, name, email, role, grades, answers } = newUser;
  return { _id, name, email, role, grades, answers };
};
