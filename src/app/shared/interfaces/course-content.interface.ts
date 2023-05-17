import { SafeResourceUrl } from "@angular/platform-browser";

export interface ICourseContent {
  id: number,
  courseId: number,
  text: string,
  title: string,
  createdAt: Date,
  video_url: SafeResourceUrl,
  updatedAt: Date,
}

export interface IcourseContentState{
  courseContent:  ICourseContent[] | null,
}

export interface IcourseContentFilterState{
  filterCourseContent: null | ICourseContent[]
}
