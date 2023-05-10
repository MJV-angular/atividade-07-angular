import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IcourseResponse, IcourseState } from '../../interfaces/courses.interfaces';

@Injectable({
  providedIn: 'root',
})
export class CourseStateService {
  constructor() {}
  private state$ = new BehaviorSubject<IcourseState>({
    courses: []
  });

  getState(): Observable<IcourseState> {
    return this.state$.asObservable();
  }

  getCourses(courses: IcourseResponse[]) {
    const state = this.state$.getValue();
    this.state$.next({
      courses: courses
    });
  }
}
