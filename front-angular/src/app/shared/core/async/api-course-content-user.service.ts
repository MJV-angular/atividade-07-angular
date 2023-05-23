import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, switchMap, take } from 'rxjs';
import { environment } from 'src/envirements/envirements';
import { CourseContentUser } from '../../interfaces/register-courses.interfaces';
import { TokenFacadeService } from '../facade/token-facade.service';

@Injectable({
  providedIn: 'root',
})
export class ApiCourseContentUserService {
  constructor(
    private httpClient: HttpClient,
    private token: TokenFacadeService
  ) {}

  completedCourseContentUser(id: number): Observable<CourseContentUser> {
    return this.token.getToken.pipe(
      take(1),
      switchMap((token) => {
        const headers = new HttpHeaders({
          Authorization: `Bearer ${token}`,
        });
        return this.httpClient.patch<CourseContentUser>(
          `${environment.apiKey}/completeCourseContent/${id}`,
          { headers }
        );
      })
    );
  }
}
