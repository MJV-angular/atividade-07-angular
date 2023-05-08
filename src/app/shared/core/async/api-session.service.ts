import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IloginRequest } from '../../interfaces/api.interfaces';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../sync/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ApiSessionService {

  constructor(private httpClient: HttpClient) { }

  login(data: IloginRequest): Observable<any> {
    return this.httpClient.post(`https://api-naianereis.vercel.app/login`, data)
  }

  logout(): void {
    localStorage.clear()
  }
}
