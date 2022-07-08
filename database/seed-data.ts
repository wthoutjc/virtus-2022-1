import bcrypt from "bcryptjs";

interface SeedUser {
  name: string;
  email: string;
  password: string;
  role: "admin" | "teacher";
}

interface SeedData {
  users: SeedUser[];
}

export const initialData: SeedData = {
  users: [
    {
      name: "Juan Camilo Ramírez",
      email: "jcramirezr@correo.udistrital.edu.co",
      password: bcrypt.hashSync("123456"),
      role: "admin",
    },
    {
      name: "Teacher 1",
      email: "teacher1@virtus-training.com",
      password: bcrypt.hashSync("123456"),
      role: "teacher",
    },
    {
      name: "Teacher 2",
      email: "teacher2@virtus-training.com",
      password: bcrypt.hashSync("123456"),
      role: "teacher",
    },
    {
      name: "Teacher 3",
      email: "teacher3@virtus-training.com",
      password: bcrypt.hashSync("123456"),
      role: "teacher",
    },
    {
      name: "Teacher 4",
      email: "teacher4@virtus-training.com",
      password: bcrypt.hashSync("123456"),
      role: "teacher",
    },
  ],
};
