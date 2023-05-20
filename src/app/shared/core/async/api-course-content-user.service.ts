import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/envirements/envirements';
import { CourseContentUser } from '../../interfaces/register-courses.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiCourseContentUserService {

  constructor(private httpClient: HttpClient) { }
  token = localStorage.getItem('@TOKEN');

  completedCourseContentUser(id: number): Observable<CourseContentUser> {

    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`
    });

    return this.httpClient.patch<CourseContentUser>(`${environment.apiKey}/completeCourseContent/${id}`, { headers })
  }
}
