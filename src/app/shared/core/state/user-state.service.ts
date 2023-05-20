import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IUser, IUserResponse, IcoursesContentUser } from '../../interfaces/user.interfaces';
import { IUserState } from '../../interfaces/user.interfaces';
import { CourseUser } from '../../interfaces/register-courses.interfaces';
import { CourseContentUser } from '../../interfaces/register-courses.interfaces';

@Injectable({
  providedIn: 'root',
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
  });

  getState(): Observable<IUserState> {
    return this.state$.asObservable();
  }

  setUser(user: IUser) {
    this.state$.next(user);
  }

  editeUser(user: IUser) {
    console.log(user)
    const state = this.state$.getValue();
    this.state$.next({
      ...state,
      ...user
    });
  }

  addCourses(courses: CourseUser[]) {
    console.log(courses)
    const state = this.state$.getValue();
    this.state$.next({
      ...state,
      courses: [...state.courses, ...courses],
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
