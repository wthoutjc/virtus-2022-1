import { Hierarchy } from "../enum";

// Interfaces
import { IGrade } from "./user";

export interface IAuth {
  logged?: boolean;
  id: string;
  email: string;
  name: string;
  role: Hierarchy | null;
  exp?: number;
  grades?: IGrade;
  answers: Array<Array<number[]>> | null;
}
