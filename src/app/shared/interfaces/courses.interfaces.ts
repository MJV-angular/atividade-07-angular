import { CourseUser } from "./register-courses.interfaces"
// import { ICourseContent } from "./course-content.interface";
// import { CoursesResponse } from "./register-courses.interfaces";
// // export interface IcourseResponse{
// //   name: string;
// //   image: string;
// //   id: number;
// //   createdAt: Date;
// //   updatedAt: Date;
// //   courseContent: ICourseContent[];
// // }


export interface IcoursesState {
  courses: CourseUser[] | null
}

