import { IcourseResponse } from "./courses.interfaces";

export interface ICatalog {
  selects: number[],
  courses: IcourseResponse[];
}
