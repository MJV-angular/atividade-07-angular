export interface IcourseResponse{
  name: string;
  image: string;
  id: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface IcoursesState {
  loaded: boolean;
  loading: boolean;
  saving: boolean;
  // filters: TodoFilters;
  courses: IcourseResponse[]
}
export interface IcourseState {
  loading: boolean,
  course: IcourseResponse
}
