import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IcoursesContentUser, UserResponse } from '../../interfaces/api.interfaces';
import { IUserState } from '../../interfaces/user.interfaces';
import { IRegisterCourseResponse } from '../../interfaces/register-courses.interfaces';

@Injectable({
  providedIn: 'root'
})

export class UserStateService {

  private state$ = new BehaviorSubject<IUserState>({
    id: undefined,
    createdAt: undefined,
    email: undefined,
    name: undefined,
    picture: undefined,
    dateBirth: undefined,
    cpf: undefined,
    courses: [],
    coursesContentUser: [],
    address: {
      id: undefined,
      street: undefined,
      number: undefined,
      city: undefined,
      state: undefined,
      country: undefined,
      zipCode: undefined,
      userId: undefined,
    },
  })


  getState(): Observable<IUserState> {
    return this.state$.asObservable()
  }

  setUser(user: UserResponse) {
    this.state$.next(user)
  }

  editeUser(user: UserResponse) {
    this.state$.next(user)
  }

  addCourses(courses: IRegisterCourseResponse[]) {
    const state = this.state$.getValue();
    this.state$.next({
      ...state,
      courses: [...state.courses, ...courses]
    });
  }

  addCoursesContent(coursesContent: IcoursesContentUser[]) {

    const state = this.state$.getValue();
    console.log(state)
    this.state$.next({
      ...state,
      coursesContentUser: [...state.coursesContentUser, ...coursesContent]
    });
  }

}


