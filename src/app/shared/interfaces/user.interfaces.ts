import { IRegisterCourseResponse } from "./register-courses.interfaces";


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
  address?: IAddressState
  token?:string
  courses: IRegisterCourseResponse[]
}
