import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  RegisterCourseRequest,
  CourseContentUser,
} from '../../interfaces/register-courses.interfaces';
import { environment } from 'src/envirements/envirements';

@Injectable({
  providedIn: 'root',
})
export class ApiCourseContentUserByCourseIdService {
  token = localStorage.getItem('@TOKEN');

  constructor(private httpClient: HttpClient) {}

  getCoursesContentUserById(
    id: number
  ): Observable<CourseContentUser[]> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });

    return this.httpClient.get<CourseContentUser[]>(
      `${environment.apiKey}/courseContentUser/${id}`,
      { headers }
    );
  }
}
