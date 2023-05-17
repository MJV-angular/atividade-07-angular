import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IcourseResponse, IcoursesState } from '../../interfaces/courses.interfaces';

@Injectable({
  providedIn: 'root',
})
export class CourseStateService {

  constructor() {}
  private state$ = new BehaviorSubject<IcoursesState>({
    courses: []
  });

  getState(): Observable<IcoursesState> {
    return this.state$.asObservable();
  }

  setCourses(courses: IcourseResponse[]) {
    this.state$.next({
      courses: courses,
    });
  }
}
