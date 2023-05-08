import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { ApiCoursesService } from '../async/api-courses.service';
import { CourseStateService } from '../state/course-state.service';
import { CatalogStateService } from '../state/catalog-state.service';
import { IcourseResponse } from '../../interfaces/courses.interfaces';
@Injectable({
  providedIn: 'root'
})
export class ApiCoursesFacadeService {

  constructor(public api: ApiCoursesService, public courseState: CourseStateService, public catalogState: CatalogStateService) { }

  getCourses(): Observable<IcourseResponse[]> {
    
    return this.api.getCourses().pipe(tap((response) => {
      this.courseState.getCourses(response)
    }))
  }
}
