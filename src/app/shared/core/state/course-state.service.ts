import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IcourseResponse } from '../../interfaces/courses.interfaces';

@Injectable({
  providedIn: 'root'
})


export class CourseStateService {

  constructor() { }

  private courseState$ = new BehaviorSubject<IcourseResponse[]>([])

  getState(): Observable<IcourseResponse[]> {
    return this.courseState$.asObservable()
  }

  getCourses(courses: IcourseResponse[]) {
    this.courseState$.next(courses)
  }

}
