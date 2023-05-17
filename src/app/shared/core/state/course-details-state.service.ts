import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IcourseDetailsState } from '../../interfaces/course-details.interfaces';
import { IcoursesContentUser } from '../../interfaces/api.interfaces';
import { IcourseResponse } from '../../interfaces/courses.interfaces';
import { ICourseContent } from '../../interfaces/course-content.interface';

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

  addCourseContentSelected(course:ICourseContent ) {
    return this.state$.next({
      ...this.state$.getValue(),
      courseSelected: course
    });
  }

}
