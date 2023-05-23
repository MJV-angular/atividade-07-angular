import { Injectable } from '@angular/core';
import { Observable, map, switchMap, take } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenFacadeService } from '../facade/token-facade.service';
import {
  RegisterCoursesApi,
  RegisterCourseRequest,
} from '../../interfaces/register-courses.interfaces';
import { environment } from 'src/envirements/envirements';

@Injectable({
  providedIn: 'root',
})
export class ApiRegisterCourseService {

  constructor(private httpClient: HttpClient, private token: TokenFacadeService) {
  }

  registerCourse(
    data: RegisterCourseRequest
  ): Observable<RegisterCoursesApi[]> {
    return this.token.getToken.pipe(
      take(1),
      switchMap(token => {
        const headers = new HttpHeaders({
          Authorization: `Bearer ${token}`,
        });
        return this.httpClient.post<RegisterCoursesApi[]>(
          `${environment.apiKey}/registercourse`,
          data,
          { headers }
        );
      })
    );
  }


}
