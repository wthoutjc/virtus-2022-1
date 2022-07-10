export interface IAnswers {
  module1: [number[], number[], number[], number[], number[], number[]];
  module2: [number[], number[], number[], number[]];
  module3: [
    number[],
    number[],
    number[],
    number[],
    number[],
    number[],
    number[]
  ];
}

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
  createdAt: string;
  updatedAt: string;
  grades?: IGrade;
  answers?: IAnswers;
}
