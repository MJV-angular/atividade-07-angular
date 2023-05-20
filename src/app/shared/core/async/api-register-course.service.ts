import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RegisterCoursesApi, RegisterCourseRequest} from '../../interfaces/register-courses.interfaces';
import { environment } from 'src/envirements/envirements';

@Injectable({
  providedIn: 'root',
})
export class ApiRegisterCourseService {
  token = localStorage.getItem('@TOKEN');
  constructor(private httpClient: HttpClient) { }
  registerCourse(
    data: RegisterCourseRequest
  ): Observable<RegisterCoursesApi[]> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`
    });
    return this.httpClient.post<RegisterCoursesApi[]>(`${environment.apiKey}/registercourse`, data, { headers })
  }
}
