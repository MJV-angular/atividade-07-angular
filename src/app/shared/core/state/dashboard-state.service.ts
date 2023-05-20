import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IcourseDetailsState } from '../../interfaces/course-details.interfaces';
import { CourseContent, CourseContentUser, CourseUser } from '../../interfaces/register-courses.interfaces';
import { DashboardState } from '../../interfaces/dashboard.interfaces';

@Injectable({
  providedIn: 'root'
})

export class DashboardStateService {

  constructor() { }

  private state$ = new BehaviorSubject<DashboardState>({
    coursesContentUserbyCourseId : null,
    courseContentSelect: null,
  });


  getState(): Observable<DashboardState> {
    return this.state$.asObservable();
  }

  addCoursesContentsbyCourse(coursesContentsbyCourse: CourseContentUser[] ) {
   const state = this.state$.getValue();
    return this.state$.next({
      ...state,
      coursesContentUserbyCourseId: coursesContentsbyCourse
    });
  }

  addcourseContentSelect(coursesContentSelect: CourseContentUser ) {


    const state = this.state$.getValue();
    console.log(state.courseContentSelect, "poi")
     return this.state$.next({
       ...state,
       courseContentSelect:  coursesContentSelect
     });

   }

}
