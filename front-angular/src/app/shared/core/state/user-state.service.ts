import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {
  IUser,
  IcoursesContentUser,
} from '../../interfaces/user.interfaces';
import { IUserState } from '../../interfaces/user.interfaces';
import { CourseUser } from '../../interfaces/register-courses.interfaces';

@Injectable({
  providedIn: 'root',
})



export class UserStateService {
  userState = {
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
  }
  private state$ = new BehaviorSubject<IUserState>(this.userState);

  getState(): Observable<IUserState> {
    return this.state$.asObservable();
  }

  setUser(user: IUser) {
    this.state$.next(user);
  }

  editeUser(user: IUser) {
    const state = this.state$.getValue();
    this.state$.next({
      ...state,
      ...user,
    });
  }

  cleanStateUser() {
    this.state$.next(
      this.userState
    );
  }

  addCourses(courses: CourseUser[]) {
    const state = this.state$.getValue();

    this.state$.next({
      ...state,
      courses: [...courses],
    });


  }

  addCoursesContentUser(coursesContent: IcoursesContentUser[]) {
    const state = this.state$.getValue();
    this.state$.next({
      ...state,
      coursesContentUser: [...state.coursesContentUser, ...coursesContent],
    });
  }
}
