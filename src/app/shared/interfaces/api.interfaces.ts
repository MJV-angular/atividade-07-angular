export interface UserRequest {
  email: string;
  name: string;
  password: string;
  picture?: string;
  dateBirth: Date;
  cpf: string;
}

export interface UserResponse {
  id: number;
  createdAt: Date;
  email: string;
  name: string;
  picture?: string;
  dateBirth: Date;
  cpf: string;
  address:IAddressRequest;
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
  zipCode: number;
  userId: number;
}

