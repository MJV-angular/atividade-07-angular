import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IcourseResponse } from '../../interfaces/courses.interfaces';
import { ICatalog } from '../../interfaces/catalog.interfaces';


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

  addCourses(courses: IcourseResponse[]) {
    return this.state$.next({
      ...this.state$.getValue(),
      courses: courses,
    });
  }

  selectCourses(id: number) {
    const state = this.state$.getValue();
    console.log(id)
    if (state.selects.indexOf(id) === -1) {
      return this.state$.next({
        ...state,
        selects: [...state.selects, id ],
      });
    } else {
      return this.state$.next({
        ...state,
        selects: [...state.selects.filter(ele => ele !== id)],
      });
    }
  }
}


