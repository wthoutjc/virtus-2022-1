import { Hierarchy } from "../enum";

export interface IAuth {
  logged?: boolean;
  id: string;
  name: string;
  role: Hierarchy | null;
}
