export interface IQuestion {
  question: string;
  answers: string[];
  correct: number;
}

export interface ITest {
  _id?: string;
  name: string;
  modulo: string;
  exp: number;
  questions: IQuestion[];
  createdAt?: string;
  updatedAt?: string;
}

export interface ISubModulo {
  _id?: string;
  name: string;
  to: string;
  description: string;
  modulo: string;
  exp: number;
  content: string;
  bibliography: string;
  test: ITest;
  time: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface IModulo {
  _id?: string;
  name: string;
  descripcion: string;
  keyWords: string[];
  goals: string[];
  requirements: string[];
  content: ISubModulo[];
  createdAt?: string;
  updatedAt?: string;
}
