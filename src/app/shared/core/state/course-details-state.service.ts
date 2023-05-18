import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IcourseDetailsState } from '../../interfaces/course-details.interfaces';
import { ICourseContent, MergedCourseContentAndCourseContentUser } from '../../interfaces/course-content.interface';

@Injectable({
  providedIn: 'root'
})
export class CourseDetailsStateService {

  constructor() { }

  private state$ = new BehaviorSubject<IcourseDetailsState>({
    courseSelected: null,
  });

  getState(): Observable<IcourseDetailsState> {
    return this.state$.asObservable();
  }

  addCourseContentSelected(course: MergedCourseContentAndCourseContentUser ) {
    return this.state$.next({
      ...this.state$.getValue(),
      courseSelected: course
    });
  }

}
