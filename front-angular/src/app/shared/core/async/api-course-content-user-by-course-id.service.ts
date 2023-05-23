import { Injectable } from '@angular/core';
import { Observable, switchMap, take } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  RegisterCourseRequest,
  CourseContentUser,
} from '../../interfaces/register-courses.interfaces';
import { environment } from 'src/envirements/envirements';
import { TokenFacadeService } from '../facade/token-facade.service';

@Injectable({
  providedIn: 'root',
})
export class ApiCourseContentUserByCourseIdService {

  constructor(
    private httpClient: HttpClient,
    private token: TokenFacadeService
  ) {}

  getCoursesContentUserById(id: number): Observable<CourseContentUser[]> {

    return this.token.getToken.pipe(
      take(1),
      switchMap((token) => {
        const headers = new HttpHeaders({
          Authorization: `Bearer ${token}`,
        });
        return this.httpClient.get<CourseContentUser[]>(
          `${environment.apiKey}/courseContentUser/${id}`,
          { headers }
        );
      })
    );
  }
}
