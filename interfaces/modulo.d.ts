export interface ITest {
  id: string;
  name: string;
  description: string;
  modulo: string;
}

export interface ISubModulo {
  id: string;
  name: string;
  description: string;
  modulo: string;
  exp: number;
  content: string;
}

export interface IModulo {
  id: string;
  nombre: string;
  descripcion: string;
  content: ISubModulo[];
  test: ITest;
}
