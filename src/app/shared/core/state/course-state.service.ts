import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IcourseState } from '../types/course-state.types';

@Injectable({
  providedIn: 'root'
})


export class CourseStateService {

  constructor() { }

  private courseState$ = new BehaviorSubject<IcourseState[]>([])

  getState(): Observable<IcourseState[]> {
    return this.courseState$.asObservable()
  }

  getCourses(courses: IcourseState[]) {
    this.courseState$.next(courses)
  }

}
