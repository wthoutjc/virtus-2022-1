import type { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";

// Database
import { db } from "../../../database";
import { User } from "../../../models";

// JWT
import { validations } from "../../../utils";

type Data =
  | { message: string }
  | {
      user: {
        email: string;
        name: string;
        role: string;
      };
    };

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case "POST":
      return registerUser(req, res);

    default:
      res.status(400).json({
        message: "Bad request",
      });
  }
}

const registerUser = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  const {
    email = "",
    password = "",
    password2 = "",
    name = "",
  } = req.body as {
    email: string;
    password: string;
    password2: string;
    name: string;
  };

  await db.connect();
  const user = await User.findOne({ email });

  if (user) {
    await db.disconnect();
    return res.status(400).json({
      message: "Email already registered",
    });
  }

  if (password.length < 6) {
    return res.status(400).json({
      message: "Password must be at least 6 characters",
    });
  }

  if (name.length < 2) {
    return res.status(400).json({
      message: "Name must be at least 2 characters",
    });
  }

  if (!validations.isValidEmail(email)) {
    return res.status(400).json({
      message: "Email is not valid",
    });
  }

  if (password !== password2) {
    return res.status(400).json({
      message: "Passwords do not match",
    });
  }

  const newUser = new User({
    email: email.toLocaleLowerCase(),
    password: bcrypt.hashSync(password),
    role: "teacher",
    name,
  });

  try {
    await newUser.save({ validateBeforeSave: true });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Something wrong happened, please check logs",
    });
  }

  const { _id, role } = newUser;

  return res.status(200).json({
    user: {
      email,
      role,
      name,
    },
  });
};
