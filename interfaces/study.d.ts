// Interfaces
import { IModulo, ISubModulo, ITest } from "./";

export interface IStudy {
  modulos: IModulo[];
  currentModulo: IModulo | null;
  currentSubModulo: ISubModulo | null;
  currentTest: ITest | null;
}
