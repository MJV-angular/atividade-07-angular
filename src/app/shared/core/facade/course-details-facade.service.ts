import { Injectable } from '@angular/core';
import { ApiCoursesFacadeService } from './api-courses.facade.service';
import { ApiUserFacadeService } from './api-user.facade.service';
import { CourseDetailsStateService } from '../state/course-details-state.service';
import { CourseContentFacadeService } from './course-content.facade.service';
import {
  tap,
  switchMap,
  map,
  of,
  combineLatest,
  Observable,
} from 'rxjs';
import { UserStateService } from '../state/user-state.service';
import { MergedCourseContentAndCourseContentUser } from '../../interfaces/course-content.interface';
import { ApiCourseContentUserService } from '../async/api-course-content-user.service';
import { IcoursesContentUser } from '../../interfaces/api.interfaces';
@Injectable({
  providedIn: 'root',
})
export class CourseDetailsFacadeService {
  constructor(
    private courseContentUserApi :ApiCourseContentUserService,
    private userFacade: ApiUserFacadeService,
    private coursedetailsState: CourseDetailsStateService,
    private courseContentFacade: CourseContentFacadeService,
    private userState: UserStateService
  ) { }

  readonly getCourseContent$ = this.courseContentFacade.getCoursesContent$;

  readonly getCourseContentBySelect$ = this.coursedetailsState
    .getState()
    .pipe(map((value) => value.courseSelected));

  getSelectCourseContent$ = this.coursedetailsState.getState();
  getCourseContentbyId(idSelect: number) {
    return this.getCourseContent$.pipe(
      map((value) => value.find((ele) => ele.id === idSelect)),
      tap((value) => this.coursedetailsState.addCourseContentSelected(value!))
    );
  }

  readonly firstCourseContent$ = combineLatest([
    this.userFacade.getUser$,
    this.getCourseContent$,
  ]).pipe(
    switchMap(([userCourses, courses]) => {
      const courseCompleted = courses.filter((course) =>
        userCourses.coursesContentUser.some(
          (userCourse) => userCourse.complete === true
        )
      );
      if (courseCompleted) {
        return of(courses[0]);
      }
      return of(courses[0]);
    }),
    tap((value) => this.coursedetailsState.addCourseContentSelected(value))
  );


  readonly getCoursesContentUser$ = combineLatest([
    this.userFacade.getUser$,
    this.getCourseContent$,
  ]).pipe(
    map(([userCourses, coursesContent]) => {
      let merged: MergedCourseContentAndCourseContentUser[] = []
      coursesContent.forEach(courseContentUser => {
        console.log(courseContentUser)
        userCourses.coursesContentUser.forEach(coursesContent => {
          if (coursesContent.courseContentId === courseContentUser.id) {
            merged.push({ ...coursesContent, ...courseContentUser })
          }
        })
      });
      return merged
    }),
  );


  completedCourseContentUser(id: number): Observable<IcoursesContentUser> {
    return this.courseContentUserApi.completedCourseContentUser(id).pipe(
      map((x: IcoursesContentUser) => x),
      tap(x => this.userState.addCompleteCoursesContentUser(x))
    );
  }
}


