import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {  IcoursesState } from '../../interfaces/courses.interfaces';
import { CourseUser } from '../../interfaces/register-courses.interfaces';

@Injectable({
  providedIn: 'root',
})
export class CourseStateService {

  constructor() {}
  private state$ = new BehaviorSubject<IcoursesState>({
    courses: null
  });

  getState(): Observable<IcoursesState> {
    return this.state$.asObservable();
  }

  setCourses(courses: CourseUser[]) {
    this.state$.next({
      courses: courses,
    });
  }
}
