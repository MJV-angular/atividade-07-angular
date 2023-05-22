import { CourseContent } from './register-courses.interfaces';

export interface IcourseContentState {
  courseContent: CourseContent[] | null;
}

export interface IcourseContentFilterState {
  filterCourseContent: null | CourseContent[];
}
