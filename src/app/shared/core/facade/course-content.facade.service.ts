import { Injectable } from '@angular/core';
import { Observable, Subscriber, tap } from 'rxjs';
import { ApiCourseContentService } from '../async/api-course-content.service';
@Injectable({
  providedIn: 'root'
})
export class CourseContentFacadeService {

  constructor(private a ) { }

  addUser(): Observable<UserResponse> {
    return this.apiServices.createUser(user).pipe(
      tap((response) => {
        this.userState.setUser(response)
      })
    )
  }
}
