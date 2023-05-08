import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserRequest } from '../../interfaces/api.interfaces';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../sync/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ApiUserService {

  constructor(private httpClient: HttpClient, private localStorage: LocalStorageService) { }

  createUser(data: UserRequest): Observable<any> {
    return this.httpClient.post(`http://localhost:3000/user`, data)
  }

  updatedUser(data: Partial<UserRequest>, UserId: number): Observable<any> {
    return this.httpClient.patch(`https://api-naianereis.vercel.app/user/${UserId}`, data)
  }
}
