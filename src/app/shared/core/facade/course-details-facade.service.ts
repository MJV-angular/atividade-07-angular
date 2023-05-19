import { Injectable } from '@angular/core';
import { ApiCoursesFacadeService } from './api-courses.facade.service';
import { ApiUserFacadeService } from './api-user.facade.service';
import { CourseDetailsStateService } from '../state/course-details-state.service';
import { CourseContentFacadeService } from './course-content.facade.service';
import { tap, switchMap, map, of, combineLatest, Observable } from 'rxjs';
import { UserStateService } from '../state/user-state.service';
import { MergedCourseContentAndCourseContentUser } from '../../interfaces/course-content.interface';
import { ApiCourseContentUserService } from '../async/api-course-content-user.service';
import { IcoursesContentUser } from '../../interfaces/user.interfaces';
@Injectable({
  providedIn: 'root',
})
export class CourseDetailsFacadeService {
  constructor(
    private courseContentUserApi: ApiCourseContentUserService,
    private userFacade: ApiUserFacadeService,
    private coursedetailsState: CourseDetailsStateService,
    private courseContentFacade: CourseContentFacadeService,
    private userState: UserStateService
  ) {}

  readonly getCourseContent$ = this.courseContentFacade.getCoursesContent$;

  readonly getCoursesContentUser$ = combineLatest([
    this.userFacade.getUser$,
    this.getCourseContent$,
  ]).pipe(
    map(([user, coursesContent]) => {
      let merged: MergedCourseContentAndCourseContentUser[] = [];
      coursesContent.forEach((courseContent) => {
        user.coursesContentUser.forEach((coursesContentUser) => {
          if (coursesContentUser.courseContentId === courseContent.id) {
            merged.push({
              ...courseContent,
              courseContentUser: coursesContentUser,
            });
          }
        });
      });
      return merged;
    })
  );

  readonly getCourseContentBySelect$ = this.coursedetailsState
    .getState()
    .pipe(map((value) => value.courseSelected));

  getSelectCourseContent$ = this.coursedetailsState.getState();

  getCourseContentbyId(idSelect: number) {
    return this.getCoursesContentUser$.pipe(
      map((value) => value.find((ele) => ele.id === idSelect)),
      tap((value) => this.coursedetailsState.addCourseContentSelected(value!))
    );
  }

  readonly firstCourseContent$ = combineLatest([
    this.getCoursesContentUser$,
    this.getCourseContent$,
  ]).pipe(
    switchMap(([userCourses, courses]) => {
      const courseCompleted = userCourses.filter((userCourse) =>
        courses.some(
          (course) => userCourse.courseContentUser.complete === false
        )
      );
      if (courseCompleted) {
        return of(courseCompleted[0]);
      }
      return of(userCourses[0]);
    }),
    tap((value) => this.coursedetailsState.addCourseContentSelected(value))
  );

  completedCourseContentUser(id: number): Observable<IcoursesContentUser> {
    return this.courseContentUserApi.completedCourseContentUser(id).pipe(
      tap((x) => this.userState.addCompleteCoursesContentUser(x)),
      tap((e) => console.log(e))
    );
  }
}
