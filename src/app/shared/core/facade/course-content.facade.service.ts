import { Injectable } from '@angular/core';
import { Observable, Subscriber, distinctUntilChanged, shareReplay, tap } from 'rxjs';
import { ApiCourseContentService } from '../async/api-course-content.service';
import { ICourseContent } from '../../interfaces/course-content.interface';
import { CourseContentStateService } from '../state/course-content-state.service';

@Injectable({
  providedIn: 'root'
})

export class CourseContentFacadeService {
  constructor(private apiServices: ApiCourseContentService, private courseContentState:CourseContentStateService) {}


  readonly getCoursesContent$ = this.courseContentState
  .getState()
  .pipe(
    tap((coursesContent) => coursesContent),
    distinctUntilChanged(),
    shareReplay(1),
  );


  getCourseContent(): Observable<ICourseContent[]> {
    return this.apiServices.getCoursesContent().pipe(
      tap((response) => {
        this.courseContentState.addCoursesContent(response)
      })
    )
  }
}
