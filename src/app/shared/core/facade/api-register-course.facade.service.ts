import { Injectable } from '@angular/core';
import { ApiRegisterCourseService } from '../async/api-register-course.service';
import { UserStateService } from '../state/user-state.service';
import { Observable, Subscriber, map, mergeMap, switchMap, tap } from 'rxjs';
import { __values } from 'tslib';

@Injectable({
  providedIn: 'root'
})

export class ApiRegisterCourseFacadeService {

  constructor(public apiServices: ApiRegisterCourseService, public userState: UserStateService) {

  }



  // addRegisterCourseContent(coursesId: IRegisterCourseResponse): Observable<IRegisterCourseResponse[]> {
  //   return this.apiServices.registerCourse(coursesId).pipe(
  //     tap((response) => {
  //       console.log(response)
  //       this.userState.addCourses(response[0].courses)
  //       this.userState.addCoursesContentUser(response[0].coursesContentUser)
  //     }
  //     ),
  //   )
  // }


}
