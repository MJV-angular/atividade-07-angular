import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../sync/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ApiCoursesService {

  constructor(private httpClient: HttpClient, private localStorage: LocalStorageService) { }

  getCourses(): Observable<any> {
    return this.httpClient.get(`https://api-naianereis.vercel.app/courses`)
  }

  getCourseById(id: number): Observable<any> {
    return this.httpClient.get(`https://api-naianereis.vercel.app/courses/${id}`)
  }

}
