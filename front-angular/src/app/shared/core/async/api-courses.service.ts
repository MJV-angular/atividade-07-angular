import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/envirements/envirements';

@Injectable({
  providedIn: 'root',
})
export class ApiCoursesService {
  constructor(private httpClient: HttpClient) {}

  getCourses(): Observable<any> {
    return this.httpClient.get(`${environment.apiKey}/courses`);
  }

  getCourseById(id: number): Observable<any> {
    return this.httpClient.get(`${environment.apiKey}/courses/${id}`);
  }
}
