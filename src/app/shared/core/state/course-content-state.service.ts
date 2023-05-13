import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IcourseContentState , ICourseContent, IcourseContentFilterState} from '../../interfaces/course-content.interface';
@Injectable({
  providedIn: 'root'
})

export class CourseContentStateService {

  private state$ = new BehaviorSubject<IcourseContentState>({
    courseContent: [],
  })

  private stateFilter$ = new BehaviorSubject<IcourseContentFilterState>({
    filterCourseContent: []
  })


  getStateCourseContent(): Observable<IcourseContentState> {
    return this.state$.asObservable()
  }

  getStateCoursesContentFilter(): Observable<IcourseContentFilterState> {
    return this.stateFilter$.asObservable()
  }

  addCoursesContent(coursesContent: ICourseContent[]) {
    const state = this.state$.getValue();
    this.state$.next({
      ...state,
      courseContent: [...state.courseContent, ...coursesContent],
    });
  }

  addCoursesContentFiltered(coursesContentFiltered: ICourseContent[]) {
    const state = this.stateFilter$.getValue();
    this.stateFilter$.next({
      filterCourseContent: coursesContentFiltered
    });
  }

}


