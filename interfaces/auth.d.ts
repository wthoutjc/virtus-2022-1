import { Hierarchy } from "../enum";

// Interfaces
import { IGrade, IAnswers } from "./user";

export interface IAuth {
  logged?: boolean;
  id: string;
  email: string;
  name: string;
  role: Hierarchy | null;
  exp: number;
  grades?: IGrade;
  answers?: IAnswers;
}
