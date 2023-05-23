import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IloginRequest } from '../../interfaces/user.interfaces';
import { Observable } from 'rxjs';
import { environment } from 'src/envirements/envirements';

@Injectable({
  providedIn: 'root'
})
export class ApiSessionService {

  constructor(private httpClient: HttpClient) { }

  login(data: IloginRequest): Observable<any> {
    return this.httpClient.post(`${environment.apiKey}/login`, data)
  }
}
