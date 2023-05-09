import { Injectable } from '@angular/core';
import { ApiUserService } from '../async/api-user.service';
import { UserStateService } from '../state/user-state.service';
import { UserRequest, UserResponse } from '../../interfaces/api.interfaces';
import { Observable, combineLatest, distinctUntilChanged, map, shareReplay, tap } from 'rxjs';
import { ApiCoursesFacadeService } from './api-courses.facade.service';
@Injectable({
  providedIn: 'root'
})
export class ApiUserFacadeService {

  constructor(private apiServices: ApiUserService,
    private userState: UserStateService, private courses: ApiCoursesFacadeService) {

  }



  readonly getUser$ = this.userState
    .getState()
    .pipe(
      tap((user) => user),
      distinctUntilChanged(),
      shareReplay(1),
    );

  readonly userCourses$ = this.userState
    .getState()
    .pipe(
      map((state) => state.courses),
      distinctUntilChanged(),
      shareReplay(1),
    );

  readonly getCoursesByUser$ = combineLatest([this.userCourses$, this.courses.getcourses$])
  .pipe(
    map(([userCourses, courses]) =>
      courses.courses.filter(course => userCourses.some(userCourse => course.id == userCourse.courseId))
    )
  );

  setUserlocalHost() {
    let user = localStorage.getItem('@USER')
    if (user) {
      const data = JSON.parse(user)
      this.userState.setUser(data)
    }
  }

  addUser(user: UserRequest): Observable<UserResponse> {
    return this.apiServices.createUser(user).pipe(
      tap((response) => {
        this.userState.setUser(response)
      })
    )
  }

  updatedUser(user: Partial<UserRequest>, id: number): Observable<UserResponse> {
    return this.apiServices.updatedUser(user, id).pipe(
      tap((response) => {
        this.userState.editeUser(response)
      })
    )
  }
}
