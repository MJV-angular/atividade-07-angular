import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiCourseContentService {

  constructor(private httpClient: HttpClient) { }

  getCoursesContent(): Observable<any> {
    return this.httpClient.get(`http://localhost:3000/courseContent`)
  }
}