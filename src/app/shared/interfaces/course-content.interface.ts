export interface ICourseContent {
  id: number,
  courseId: number,
  text: string,
  title: string,
  createdAt: Date,
  video_url: string,
  updatedAt: Date,
}

export interface IcourseContentState{
  courseContent: [] | ICourseContent[]
}

