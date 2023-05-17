import { Injectable } from '@angular/core';
import { ApiRegisterCourseService } from '../async/api-register-course.service';
import { IRegisterCourseRequest, IRegisterCoursesResponse } from '../../interfaces/register-courses.interfaces';
import { UserStateService } from '../state/user-state.service';
import { Observable, Subscriber, map, mergeMap, switchMap, tap } from 'rxjs';
import { __values } from 'tslib';

@Injectable({
  providedIn: 'root'
})

export class ApiRegisterCourseFacadeService {

  constructor(public apiServices: ApiRegisterCourseService, public userState: UserStateService) {

  }

  addRegisterCourse(coursesIds: IRegisterCourseRequest): Observable<IRegisterCoursesResponse> {
    return this.apiServices.registerCourse(coursesIds).pipe(
      tap(response =>
        this.userState.addCourses(response.courses)
      ),

    )
  }

  addRegisterCourseContent(coursesId: IRegisterCourseRequest): Observable<IRegisterCoursesResponse> {
    return this.apiServices.registerCourse(coursesId).pipe(
      tap((response) => {
        this.userState.addCourses(response.courses)
        this.userState.addCoursesContent(response.coursesContentUser)
      }
      ),
    )
  }


}
