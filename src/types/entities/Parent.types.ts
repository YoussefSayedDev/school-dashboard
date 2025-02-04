import { Id } from "../global.types";
import { User } from "./User.types";

export type ParentInfo = {
  childName: string;
  childGrade: string;
};

// Parents interface
export interface Parent extends User, ParentInfo {
  children: Id[];
  teachers: Id[];
  address: string;
}
