import { Injectable } from '@angular/core';
import { ApiCoursesService } from '../async/api-courses.service';
import { CatalogStateService } from '../state/catalog-state.service';
import {
  Subject,
  distinctUntilChanged,
  map,
  of,
  shareReplay,
  switchMap,
  take,
  tap,
} from 'rxjs';
import { ApiRegisterCourseService } from '../async/api-register-course.service';
import { UserFacadeService } from './user-facade.service';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class CatalogFacadeService {
  private unsubscribe$: Subject<void> = new Subject<void>();

  constructor(
    private apiCourses: ApiCoursesService,
    private catalogState: CatalogStateService,
    private apiRegisterCourseFacade: ApiRegisterCourseService,
    private userFacade: UserFacadeService,
    private router: Router
  ) {}

  readonly getCourses$ = this.apiCourses.getCourses();

  readonly getCoursesByCatalog$ = this.catalogState.getState().pipe(
    take(1),
    map((catalog) => catalog.courses),
    switchMap((stateCourses) => {
      if (stateCourses.length == 0) {
        return of(stateCourses);
      }
      return this.getCourses$.pipe(
        tap((value) => {
          this.catalogState.addCourses(value);
        })
      );
    }),
    distinctUntilChanged(),
  );


  registerCourses(ids: number[]) {
     return this.apiRegisterCourseFacade.registerCourse({ courseId: ids }).pipe(
      map((response) => response[0].courses),
      tap((response) => {
        this.userFacade.setRegisterCourses(response);
      })
    );
  }
}
