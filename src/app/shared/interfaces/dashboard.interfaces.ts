import { CourseContent, CourseContentUser } from "./register-courses.interfaces";

export interface DashboardState {
  coursesContentUserbyCourseId: CourseContentUser[] | null;
  courseContentSelect: CourseContentUser | null
}
