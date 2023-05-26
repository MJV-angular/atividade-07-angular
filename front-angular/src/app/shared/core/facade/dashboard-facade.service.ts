import { Injectable } from '@angular/core';
import {
  Observable,
  distinctUntilChanged,
  find,
  map,
  of,
  shareReplay,
  switchMap,
  take,
  tap,
} from 'rxjs';
import { ApiCourseContentUserService } from '../async/api-course-content-user.service';
import { DashboardStateService } from '../state/dashboard-state.service';
import { CourseContentUser } from '../../interfaces/register-courses.interfaces';
import { ApiCourseContentUserByCourseIdService } from '../async/api-course-content-user-by-course-id.service';
import { ToastService } from '../sync/toast.service';

@Injectable({
  providedIn: 'root',
})
export class DashboardFacadeService {
  constructor(
    public dashboardState: DashboardStateService,
    private apiCourseContentsUserByCourse: ApiCourseContentUserByCourseIdService,
    private courseContentUserApi: ApiCourseContentUserService,
    public toast: ToastService
  ) {}

  readonly getCoursesContentbyCoursesId$ = this.dashboardState.getState().pipe(
    map(({ coursesContentUserbyCourseId }) => coursesContentUserbyCourseId),
    switchMap((stateCoursesContent) => {
      if (stateCoursesContent) {
        return of(stateCoursesContent);
      }
      return of(null);
    }),
    shareReplay(1)
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
    return this.courseContentUserApi.completedCourseContentUser(id).pipe(
      tap((response) =>
        this.dashboardState.addCompleteCoursesContentUser(response)
      ),
      tap({
        complete: () => {
          this.toast.show('Curso completado', 'success'),
            this.selectCourseContentUser(id);
        },
      }),
      shareReplay(1)
    );
  }

  getCourseContentsUserByCourseId(id: number): Observable<CourseContentUser[]> {
    return this.apiCourseContentsUserByCourse
      .getCoursesContentUserById(id)
      .pipe(
        tap((courseContentUser) => {
          this.dashboardState.addcourseContentSelect(courseContentUser[0]);
          this.dashboardState.addCoursesContentsbyCourse(courseContentUser);
        }),
        shareReplay(1)
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
