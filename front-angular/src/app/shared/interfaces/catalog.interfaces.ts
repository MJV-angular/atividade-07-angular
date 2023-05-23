export interface Courses {
  createdAt: string;
  id: number;
  name: string;
  updatedAt: string;
  image: string;
  courseContent: CourseContent[];
  description: string;
}

interface CourseContent {
  id: number;
  title: string;
  createdAt: string;
  updatedAt: string;
  courseId: number;
  description: string;
  video_url: string;
  text: string;
}

export interface ICatalog {
  courses: Courses[];
}
