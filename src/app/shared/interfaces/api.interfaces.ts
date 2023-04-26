export interface UserRequest {
  email?: string | null;
  name?: string | null;
  password?: string| null;
  picture?: string | null;
  dateBirth?: Date | null;
  cpf?: string | null;
}

export interface IloginRequest {
  email?: string | null;
  password?: string | null;
}

export interface UserResponse {
  id: number;
  createdAt: Date;
  email: string;
  name: string;
}
