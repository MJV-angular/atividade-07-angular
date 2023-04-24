import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { UserRequest, IloginRequest } from '../interfaces/api.interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) {}

  createUser(data: UserRequest): Observable<any>{
    return this.httpClient.post(`https://api-projeto-final-naianereis.vercel.app/user`, data)
  }

  login(data: IloginRequest): Observable<any>{
    return this.httpClient.post(`https://api-projeto-final-naianereis.vercel.app/login`, data)
  }

  logout(): void{
    localStorage.clear()
  }
}
