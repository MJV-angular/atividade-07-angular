import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICourseContent } from '../../interfaces/course-content.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiCourseContentService {

  constructor(private httpClient: HttpClient) { }

  getCoursesContent(): Observable<ICourseContent[]> {
    return this.httpClient.get<ICourseContent[]>('https://api-naianereis.vercel.app/courseContent');
  }
}
