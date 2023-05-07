import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserState } from '../types/user-state.types';
@Injectable({
  providedIn: 'root'
})

export class UserStateService {

  private state$ = new BehaviorSubject<UserState>({
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

  getState(): Observable<UserState> {
    return this.state$.asObservable()
  }

  setUser(user: UserState) {
    this.state$.next(user)
  }

  editeUser(user: UserState) {
    this.state$.next(user)
  }
  constructor() { }
}


