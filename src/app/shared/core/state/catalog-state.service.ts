import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IcourseState } from '../types/course-state.types';

@Injectable({
  providedIn: 'root'
})
export class CatalogStateService {

  @Injectable({
    providedIn: 'root'
  })

  private state$ = new BehaviorSubject<ICatalog>({
    courses: [],
    selects: []
  });

  constructor() { }


  getState(): Observable<ICatalog> {
    return this.state$.asObservable();
  }

  addCourses(courses: IcourseState[]) {
    return this.state$.next({
      ...this.state$.getValue(),
      courses: courses,
    });
  }

  selectCourses(courses: IcourseState) {
    const state = this.state$.getValue();
    if (state.selects.indexOf(courses) === -1) {
      return this.state$.next({
        ...state,
        selects: [...state.selects, courses],
      });
    } else {
      return this.state$.next({
        ...state,
        selects: [...state.selects.filter(ele => ele !== courses)],
      });
    }
  }
}


export interface ICatalog {
  selects: IcourseState[],
  courses: IcourseState[];
}
