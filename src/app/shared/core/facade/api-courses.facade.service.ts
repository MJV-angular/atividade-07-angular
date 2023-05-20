import { Injectable } from '@angular/core';
import { Observable, mergeMap, of, take, tap } from 'rxjs';
import { ApiCoursesService } from '../async/api-courses.service';
import { CourseStateService } from '../state/course-state.service';
import { CatalogStateService } from '../state/catalog-state.service';
import { Courses } from '../../interfaces/catalog.interfaces';

@Injectable({
  providedIn: 'root'
})

export class ApiCoursesFacadeService {

  constructor(public courseServices: ApiCoursesService, public courseState: CourseStateService, public catalogState: CatalogStateService) { }

  getCourses$: Observable<Courses[]> = this.courseState.getState()
    .pipe(
      take(1),
      mergeMap(state => {
        if (state.courses) {
          return of(state.courses);
        }
        return this.courseServices.getCourses()
          .pipe(
            tap((courses) => {
              this.courseState.setCourses(courses);
            }),
          )
      }))





  getCourseById(id: number): Observable<Courses> {
    return this.getCourses$.pipe(
      take(1),
      mergeMap((courses) => {
        const courseFind = courses.find(course => course.id == id);
        if (courseFind) {
          return of(courseFind);
        }
        return this.courseServices.getCourseById(id)
      }))
  }
}

