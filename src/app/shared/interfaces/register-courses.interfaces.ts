import { IcourseResponse } from "./courses.interfaces";
export interface IRegisterCourseRequest {
  courseId: number[];
}


export interface IRegisterCourseResponse {
  id: number;
  courseId: number;
  userId: number;
  curso: IcourseResponse
}

