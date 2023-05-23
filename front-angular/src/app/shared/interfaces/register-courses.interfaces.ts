export interface RegisterCourseRequest {
  courseId: number[];
}

export interface CourseContent {
  id: number;
  title: string;
  createdAt: string;
  updatedAt: string;
  courseId: number;
  description: string;
  video_url: string;
  text: string;
}

export interface CourseContentUser {
  some(arg0: (element: any) => boolean): boolean;
  courseContent: CourseContent;
  complete: boolean;
  favorite: boolean;
  id: number;
}

export interface CourseUser {
  course:{
    name: string;
    image: string;
    courseContent: CourseContent[];
    description: string;
    createdAt: string;
    updatedAt: string;
    id: number;
  }
}

export interface RegisterCoursesApi {
  coursesContentUser: CourseContentUser[];
  courses: CourseUser[];
}
