import { Injectable } from '@angular/core';
import { IcourseState } from '../types/course-state.types';
import { Observable, tap } from 'rxjs';
import { ApiCoursesService } from '../async/api-courses.service';
import { CourseStateService } from '../state/course-state.service';
import { CatalogStateService } from '../state/catalog-state.service';
@Injectable({
  providedIn: 'root'
})
export class ApiCoursesFacadeService {

  constructor(public api: ApiCoursesService, public courseState: CourseStateService, public catalogState: CatalogStateService) { }

  getCourses(): Observable<IcourseState[]> {
    return this.api.getCourses().pipe(tap((response) => {
      this.courseState.getCourses(response)
      this.catalogState.addCourses(response)
    }))
  }
}
