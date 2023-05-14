import { Injectable } from '@angular/core';
import { ApiRegisterCourseService } from '../async/api-register-course.service';
import { IRegisterCourseRequest, IRegisterCourseResponse } from '../../interfaces/register-courses.interfaces';
import { UserStateService } from '../state/user-state.service';
import { Observable, Subscriber, tap } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class ApiRegisterCourseFacadeService {

  constructor(public apiServices: ApiRegisterCourseService, public userState: UserStateService) {

  }

  addRegisterCourse(coursesId: IRegisterCourseRequest): Observable<IRegisterCourseResponse[]> {
    return this.apiServices.registerCourse(coursesId).pipe(
      tap((response: IRegisterCourseResponse[]) =>
        this.userState.addCourses(response)
      ),
    )
  }
}
