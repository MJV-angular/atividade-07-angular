
import { ICourseContent } from "./course-content.interface";

export interface IcourseResponse{
  name: string;
  image: string;
  id: number;
  createdAt: Date;
  updatedAt: Date;
  courseContent: ICourseContent[];
}


export interface IcoursesState {
  courses: IcourseResponse[] | null
}

