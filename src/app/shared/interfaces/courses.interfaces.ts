export interface IcourseResponse{
  name: string;
  image: string;
  id: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface IcourseState {
  courses: IcourseResponse[]
}
