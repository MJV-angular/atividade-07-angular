import { Injectable } from '@angular/core';
import { ApiCoursesFacadeService } from './api-courses.facade.service';
import { ApiUserFacadeService } from './api-user.facade.service';
import { CourseDetailsStateService } from '../state/course-details-state.service';
import { CourseContentFacadeService } from './course-content.facade.service';
import { tap, switchMap, filter, find, map, of } from 'rxjs';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class CourseDetailsFacadeService {

  constructor(private courseFacade: ApiCoursesFacadeService, private userFacade: ApiUserFacadeService, private coursedetailsState: CourseDetailsStateService, private courseContentFacade: CourseContentFacadeService, private sanitizer: DomSanitizer) { }

  readonly getCourseContent$ = this.courseContentFacade.getCoursesContent$


  readonly getCourseContentBySelect$ = this.coursedetailsState.getState().pipe(
    map((value) => value.courseSelected)
  );

  getSelectCourseContent$ = this.coursedetailsState.getState();
  getCourseContentbyId(idSelect: number) {
    return this.getCourseContent$.pipe(
      map(value => value.find(ele => ele.id === idSelect)),
      tap((value) => this.coursedetailsState.addCourseContentSelected(value!))
    );
  }

  firstCourseContent$ = this.userFacade.getUser$.pipe(
    switchMap(({ coursesContentUser }) => {
      const courseCompleted = coursesContentUser.find(ele => ele.complete === true);
      if (courseCompleted) {
        return of(coursesContentUser[0]);
      }
      return of(coursesContentUser[0]);
    })
  );
}
