import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  Observable,
  distinctUntilChanged,
  map,
  mergeMap,
  of,
  shareReplay,
  switchMap,
  take,
  tap,
  filter,
  takeUntil,
} from 'rxjs';
import { ApiCourseContentUserService } from '../async/api-course-content-user.service';
import { DashboardStateService } from '../state/dashboard-state.service';
import { UserFacadeService } from './user-facade.service';
import {
  CourseContent,
  CourseContentUser,
  CourseUser,
} from '../../interfaces/register-courses.interfaces';
import { ApiCourseContentUserByCourseIdService } from '../async/api-course-content-user-by-course-id.service';

@Injectable({
  providedIn: 'root',
})
export class DashboardFacadeService {
  constructor(
    public dashboardState: DashboardStateService,
    private apiCourseContentsUserByCourse: ApiCourseContentUserByCourseIdService,
    private courseContentUserApi: ApiCourseContentUserService
  ) {}

  readonly getCoursesContentbyCoursesId$ = this.dashboardState.getState().pipe(
    map(({ coursesContentUserbyCourseId }) => coursesContentUserbyCourseId),
    switchMap((stateCoursesContent) => {
      if (stateCoursesContent) {
        return of(stateCoursesContent);
      }
      return of(null);
    })
  );

  selectCourseContentUser(idSelect: number) {
    return this.dashboardState.getState().pipe(
      take(1),
      map(({ coursesContentUserbyCourseId }) =>
        coursesContentUserbyCourseId?.find((ele) => ele.id === idSelect)
      ),
      tap((value) => this.dashboardState.addcourseContentSelect(value!))
    );
  }

  completedCourseContentUser(id: number): Observable<CourseContentUser> {
    return this.courseContentUserApi
      .completedCourseContentUser(id)
      .pipe(
        tap((response) =>
          this.dashboardState.addCompleteCoursesContentUser(response)
        )
      );
  }

  getCourseContentsUserByCourseId(id: number): Observable<CourseContentUser[]> {
    return this.apiCourseContentsUserByCourse
      .getCoursesContentUserById(id)
      .pipe(
        tap((courseContentUser) => {
          this.dashboardState.addcourseContentSelect(courseContentUser[0]);
          this.dashboardState.addCoursesContentsbyCourse(courseContentUser);
        })
      );
  }

  readonly getCourseSelected = this.dashboardState.getState().pipe(
    switchMap((coursesContent) => {
      if (coursesContent.courseContentSelect) {
        return of(coursesContent.courseContentSelect);
      } else {
        return of(null);
      }
    })
  );
}
