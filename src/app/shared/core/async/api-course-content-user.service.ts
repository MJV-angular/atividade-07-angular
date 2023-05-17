import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IcoursesContentUser } from '../../interfaces/api.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiCourseContentUserService {

  constructor(private httpClient: HttpClient) { }
  token = localStorage.getItem('@TOKEN');

  completedCourseContentUser(id: number): Observable<IcoursesContentUser> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`
    });

    return this.httpClient.patch<IcoursesContentUser>(`https://api-naianereis.vercel.app/completeCourseContent/${id}`, { headers })

  }
}
