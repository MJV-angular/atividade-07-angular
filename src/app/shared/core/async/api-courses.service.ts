import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IloginRequest } from '../../interfaces/api.interfaces';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../sync/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ApiCoursesService {

  constructor(private httpClient: HttpClient, private localStorage: LocalStorageService) { }

  getCourses( ): Observable<any> {
    return this.httpClient.get(`https://api-naianereis.vercel.app/courses`)
  }

}
