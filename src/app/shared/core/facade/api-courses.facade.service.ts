import { Injectable } from '@angular/core';
import { Observable, combineLatest, distinctUntilChanged, finalize, map, mergeMap, of, shareReplay, startWith, switchMap, take, tap } from 'rxjs';
import { ApiCoursesService } from '../async/api-courses.service';
import { CourseStateService } from '../state/course-state.service';
import { CatalogStateService } from '../state/catalog-state.service';
import { IcourseResponse, IcourseState } from '../../interfaces/courses.interfaces';

@Injectable({
  providedIn: 'root'
})

export class ApiCoursesFacadeService {

  constructor(public courseServices: ApiCoursesService, public courseState: CourseStateService, public catalogState: CatalogStateService) { }

  readonly allCourses$ = this.courseState
    .getState()
    .pipe(
      map(state =>
        state.courses
      )
      ,
      distinctUntilChanged(),
      shareReplay(1),
    )

  getCourses(): Observable<IcourseResponse[]> {
    return this.courseServices.getCourses().pipe(tap((response) => {
      return this.courseState.setCourses(response)
    }))
  }

  loadTodos(): Observable<IcourseResponse[]> {
    return this.courseState
      .getState()
      .pipe(
        take(1),
        switchMap(state => {
          if (state.loaded) {
            return of(state.courses)
          } else {
            this.courseState.setLoading(true);
            return this.courseServices.getCourses()
              .pipe(
                tap((courses) => {
                  this.courseState.setCourses(courses);
                  this.courseState.setLoaded(true);
                }),
                finalize(() => {
                  this.courseState.setLoading(false);
                })
              )
          }
        })
      )
  }



  getCourseById(id: number): Observable<any> {
    return this.allCourses$
      .pipe(
        take(1),
        mergeMap((courses) => {
          const loadedCourse = courses.find(course => course.id === id);
          if (loadedCourse) {
            const state: IcourseState = {
              loading: false,
              course: loadedCourse,
            }
            return of(state);
          }
          return this.courseServices.getCourseById(id)
            .pipe(
              tap(response => {
                this.courseState.setCourses(response);
              }),
              map(response => {
                const state: IcourseState = {
                  loading: false,
                  course: response,
                }
                return state;
              }),
            )
        })
      )
  }
}
