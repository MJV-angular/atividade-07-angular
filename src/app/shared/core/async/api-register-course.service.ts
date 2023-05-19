import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IRegisterCoursesResponse } from '../../interfaces/register-courses.interfaces';
import {
  IRegisterCourseRequest,

} from '../../interfaces/register-courses.interfaces';

@Injectable({
  providedIn: 'root',
})
export class ApiRegisterCourseService {
  token = localStorage.getItem('@TOKEN');
  constructor(private httpClient: HttpClient) { }
  registerCourse(
    data: IRegisterCourseRequest
  ): Observable<IRegisterCoursesResponse[]> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`
    });
    return this.httpClient.post<IRegisterCoursesResponse[]>(`https://api-naianereis.vercel.app/registercourse`, data, { headers })
  }
}
