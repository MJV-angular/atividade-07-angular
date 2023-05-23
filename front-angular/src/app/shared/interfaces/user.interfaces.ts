import { CourseUser } from './register-courses.interfaces';
export interface IUser {
  user: any;
  token: string;
  id: number;
  createdAt: Date;
  email: string;
  name: string;
  picture?: string;
  dateBirth: Date;
  cpf: string;
  address: IAddressRequest;
  courses: CourseUser[];
  coursesContentUser: IcoursesContentUser[];
}

export interface UserRequest {
  email: string;
  name: string;
  password: string;
  picture?: string;
  dateBirth: Date;
  cpf: string;
}

export interface IcoursesContentUser {
  id: number;
  courseContentId: number;
  userId: number;
  complete: boolean;
  favorite: boolean;
}

export interface IloginRequest {
  email: string;
  password: string;
}

export interface IAddressRequest {
  id: number;
  street: string;
  number: number;
  city: string;
  state: string;
  country: string;
  zipCode: string;
  userId: number;
}

export interface IAddressState {
  id?: number;
  street?: string;
  number?: number;
  city?: string;
  state?: string;
  country?: string;
  zipCode?: string;
  userId?: number;
}

export interface IUserState {
  id?: number;
  createdAt?: Date;
  email?: string;
  name?: string;
  picture?: string;
  dateBirth?: Date;
  cpf?: string;
  address?: IAddressState;
  courses: CourseUser[];
  coursesContentUser: IcoursesContentUser[];
}

export interface IUserResponse {
  user: IUser;
  token: string;
}
