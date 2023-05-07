export interface UserState {
  id?: number;
  createdAt?: Date;
  email?: string ;
  name?: string ;
  picture?: string;
  dateBirth?: Date ;
  cpf?: string ;
  address: {
    id?: number ;
    street?: string ;
    number?: number ;
    city?: string ;
    state?: string;
    country?: string;
    zipCode?: string;
    userId?: number ;
  };
}
