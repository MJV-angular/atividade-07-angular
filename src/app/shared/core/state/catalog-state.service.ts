import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Courses } from '../../interfaces/catalog.interfaces';
import { ICatalog } from '../../interfaces/catalog.interfaces';

@Injectable({
  providedIn: 'root',
})
export class CatalogStateService {
  @Injectable({
    providedIn: 'root',
  })
  private state$ = new BehaviorSubject<ICatalog>({
    courses: [],
  });

  constructor() {}

  getState(): Observable<ICatalog> {
    return this.state$.asObservable();
  }

  cleanCatalog() {
    this.state$.next({
      courses: [],
    });
  }

  addCourses(courses: Courses[]) {
    return this.state$.next({
      ...this.state$.getValue(),
      courses: courses,
    });
  }
}
