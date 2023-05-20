import { Injectable } from '@angular/core';
import { ApiUserService } from '../async/api-user.service';
import { UserStateService } from '../state/user-state.service';
import { distinctUntilChanged, map, shareReplay, tap } from 'rxjs';

import { ApiCoursesFacadeService } from './api-courses.facade.service';
import { CourseContentUser, CourseUser } from '../../interfaces/register-courses.interfaces';
import { IcoursesContentUser } from '../../interfaces/user.interfaces';

@Injectable({
  providedIn: 'root',
})
export class UserFacadeService {
  constructor(
    private apiServices: ApiUserService,
    private userState: UserStateService,
    private courses: ApiCoursesFacadeService
  ) {}

  // necessário
  setRegisterCourses(courses: CourseUser[]) {
    return this.userState.addCourses(courses);
  }

  // necessário
  readonly getCoursesUser$ = this.userState.getState().pipe(
    map((state) => state.courses),
    distinctUntilChanged(),
    shareReplay(1)
  );


  readonly getCoursesContentUser$ = this.userState.getState().pipe(
    map((state) => state.coursesContentUser),
    distinctUntilChanged(),
    shareReplay(1)
  );

  readonly getUser$ = this.userState.getState().pipe(
    distinctUntilChanged(),
    shareReplay(1)
  );


  // necessário
  setCoursesCompleted(courses: CourseContentUser) {
    return this.userState.addCompleteCoursesContentUser(courses);
  }
}
