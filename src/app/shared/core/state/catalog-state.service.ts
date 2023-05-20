import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Courses } from '../../interfaces/catalog.interfaces';
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

  addCourses(courses: Courses[]) {
    return this.state$.next({
      ...this.state$.getValue(),
      courses: courses,
    });
  }

  selectCourses(id: number) {
    const state = this.state$.getValue();
    if (state.selects.indexOf(id) == -1) {
      this.state$.next({
        ...state,
        selects: [...state.selects, id ],
      });
    } else {
      this.state$.next({
        ...state,
        selects: [...state.selects.filter(ele => ele !== id)],
      });

    }
  }
}


