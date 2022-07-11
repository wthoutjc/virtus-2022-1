// Interfaces
import { IModulo, ISubModulo, ITest } from "./";

export interface IStudy {
  modulos: IModulo[];
  currentSubModulo: ISubModulo | null;
  currentTest: ITest | null;
  userAnswers: {
    [key: string]: number;
  } | null;
}
