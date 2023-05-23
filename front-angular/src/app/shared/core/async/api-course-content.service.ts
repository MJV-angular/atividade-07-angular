import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CourseContent } from '../../interfaces/register-courses.interfaces';
import { environment } from 'src/envirements/envirements';

@Injectable({
  providedIn: 'root'
})
export class ApiCourseContentService {

  constructor(private httpClient: HttpClient) { }

  getCoursesContent(): Observable<CourseContent[]> {
    return this.httpClient.get<CourseContent[]>(`${environment.apiKey}/courseContent`);
  }

}
