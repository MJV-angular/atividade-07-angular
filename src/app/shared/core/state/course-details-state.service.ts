import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IcourseDetailsState } from '../../interfaces/course-details.interfaces';
import { CourseContent } from '../../interfaces/register-courses.interfaces';

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

  addCourseContentSelected(course: CourseContent ) {
    return this.state$.next({
      ...this.state$.getValue(),
      courseSelected: course
    });
  }

}
