export interface IGrade {
  module1: number[];
  module2: number[];
  module3: number[];
}

export interface IUser {
  _id: string;
  name: string;
  email: string;
  password?: string;
  role: string;
  exp: number;
  createdAt: string;
  updatedAt: string;
  grades?: IGrade;
  answers?: Array<number[]>
}
