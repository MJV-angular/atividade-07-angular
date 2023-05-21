import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CourseContent } from '../../interfaces/register-courses.interfaces';
import {
  IcourseContentState,
  IcourseContentFilterState,
} from '../../interfaces/course-content.interface';
@Injectable({
  providedIn: 'root',
})
export class CourseContentStateService {
  private state$ = new BehaviorSubject<IcourseContentState>({
    courseContent: null,
  });

  private stateFilter$ = new BehaviorSubject<IcourseContentFilterState>({
    filterCourseContent: null,
  });

  getStateCourseContent(): Observable<IcourseContentState> {
    return this.state$.asObservable();
  }

  getStateCoursesContentFilter(): Observable<IcourseContentFilterState> {
    return this.stateFilter$.asObservable();
  }

  addCoursesContent(coursesContent: CourseContent[]) {
    const state = this.state$.getValue();
    if (state.courseContent) {
      this.state$.next({
        courseContent: [...state.courseContent, ...coursesContent],
      });
    } else {
      this.state$.next({
        courseContent: coursesContent,
      });
    }
  }

  cleanStateCoursesContent() {
    this.state$.next({
      courseContent: null,
    });
  }

  addCoursesContentFiltered(coursesContentFiltered: CourseContent[]) {
    this.stateFilter$.next({
      filterCourseContent: coursesContentFiltered,
    });
  }
}
