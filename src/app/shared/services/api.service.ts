import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserRequest, IloginRequest, UserResponse } from '../interfaces/api.interfaces';
import { Observable, Subject, tap, BehaviorSubject } from 'rxjs';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private userSubject = new BehaviorSubject<UserResponse | null>(null);
  user$: Observable<UserResponse | null> = this.userSubject.asObservable();

  constructor(private httpClient: HttpClient, private localStorage: LocalStorageService) { }

  createUser(data: UserRequest): Observable<any> {
    return this.httpClient.post(`https://api-projeto-final.vercel.app/user`, data)
  }

  updatedUser(data: Partial<UserRequest>, UserId: number): Observable<any> {
    return this.httpClient.patch(`https://api-projeto-final-naianereis.vercel.app/user/${UserId}`, data)
  }

  login(data: IloginRequest): Observable<any> {
    return this.httpClient.post(`https://api-projeto-final-naianereis.vercel.app/login`, data)
  }

  logout(): void {
    localStorage.clear()
  }
}
