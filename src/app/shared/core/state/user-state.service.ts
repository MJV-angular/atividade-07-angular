import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {  UserRequest, UserResponse} from '../../interfaces/api.interfaces';
import { IPartialUser } from '../../interfaces/user.interfaces';
@Injectable({
  providedIn: 'root'
})

export class UserStateService {



  private state$ = new BehaviorSubject<Partial<IPartialUser>>({
    id: undefined,
    createdAt: undefined,
    email: undefined,
    name: undefined,
    picture: undefined,
    dateBirth: undefined,
    cpf: undefined,
    address: {
      id: undefined,
      street: undefined,
      number: undefined,
      city: undefined,
      state: undefined,
      country: undefined,
      zipCode: undefined,
      userId: undefined,
    }
  })

  getState(): Observable<Partial<IPartialUser>> {
    return this.state$.asObservable()
  }

  setUser(user: UserResponse) {
    this.state$.next(user)
  }

  editeUser(user: UserResponse) {
    this.state$.next(user)
  }
  constructor() { }
}


