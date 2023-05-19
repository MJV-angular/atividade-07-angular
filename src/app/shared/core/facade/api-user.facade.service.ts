import { Injectable } from '@angular/core';
import { ApiUserService } from '../async/api-user.service';
import { UserStateService } from '../state/user-state.service';
import { IUser, IUserResponse, IUserState, UserRequest } from '../../interfaces/user.interfaces';
import {
  EMPTY,
  Observable,
  combineLatest,
  distinctUntilChanged,
  map,
  mergeMap,
  of,
  shareReplay,
  tap,
} from 'rxjs';
import { ApiCoursesFacadeService } from './api-courses.facade.service';
@Injectable({
  providedIn: 'root',
})
export class ApiUserFacadeService {
  constructor(
    private apiServices: ApiUserService,
    private userState: UserStateService,
    private courses: ApiCoursesFacadeService
  ) {}

  readonly getUser$ = this.userState.getState().pipe(
    tap((user) => user),
    distinctUntilChanged(),
    shareReplay(1)
  );

  readonly userCourses$ = this.userState.getState().pipe(
    map((state) => state.courses),
    distinctUntilChanged(),
    shareReplay(1)
  );

  readonly updatedLocalStorage$ = this.userState.getState().pipe(
    map((state) => localStorage.setItem('@USER', JSON.stringify(state))),
    distinctUntilChanged(),
    shareReplay(1)
  );

  readonly getCoursesByUser$ = combineLatest([
    this.userCourses$,
    this.courses.getCourses$,
  ]).pipe(
    map(([userCourses, courses]) =>
      courses.filter((course) =>
        userCourses.some((userCourse) => course.id == userCourse.courseId)
      )
    )
  );


  addUser(user: UserRequest): Observable<IUser> {
    return this.apiServices.createUser(user).pipe(
      tap((response) => {
        this.userState.setUser(response);
      })
    );
  }

  setUserWithlocalHost() {
    let user = localStorage.getItem('@USER');
    if (user) {
      console.log(user)
      const data = JSON.parse(user);
      this.userState.setUser(data);
    }
  }

  updatedUser(
    user: Partial<UserRequest>,
    id: number
  ): Observable<IUser> {
    return this.apiServices.updatedUser(user, id).pipe(
      tap((response) => {
        console.log(response)
        this.userState.editeUser(response);
      })
    );
  }
}
