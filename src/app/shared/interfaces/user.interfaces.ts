import { IcourseResponse } from "./courses.interfaces";
export interface IAddress {
  id: number;
  street: string;
  number: number;
  city: string;
  state: string;
  country: string;
  zipCode: string;
  userId: number;

}

export interface IPartialUser {
  id: number;
  createdAt: Date;
  email: string;
  name: string;
  picture: string;
  dateBirth: Date;
  cpf: string;
  address: Partial<IAddress>
  token:string
  courses: Partial<IcourseResponse>[]
}
