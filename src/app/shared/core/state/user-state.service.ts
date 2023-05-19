import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IUser, IUserResponse, IcoursesContentUser } from '../../interfaces/user.interfaces';
import { IUserState } from '../../interfaces/user.interfaces';
import { IRegisterCourseResponse } from '../../interfaces/register-courses.interfaces';

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
    this.state$.next(user);
  }

  addCourses(courses: IRegisterCourseResponse[]) {
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

  addCompleteCoursesContentUser(coursesContentUser: IcoursesContentUser) {
    const state = this.state$.getValue();
    const updatedCoursesContentUser = state.coursesContentUser.map((courseContentUser) => {
      console.log(courseContentUser.courseContentId, courseContentUser.id);
      if (courseContentUser.courseContentId === coursesContentUser.id) {
        return { ...courseContentUser, complete: coursesContentUser.complete };
      }
      return courseContentUser;
    });

    this.state$.next({
      ...state,
      coursesContentUser: updatedCoursesContentUser ,
    });
  }
}

