import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserRequest } from '../../interfaces/user.interfaces';
import { Observable } from 'rxjs';
import { environment } from 'src/envirements/envirements';

@Injectable({
  providedIn: 'root'
})
export class ApiUserService {

  constructor(private httpClient: HttpClient) { }

  createUser(data: UserRequest): Observable<any> {
    return this.httpClient.post(`${environment.apiKey}/user`, data)
  }

  updatedUser(data: Partial<UserRequest>, UserId: number): Observable<any> {
    return this.httpClient.patch(`${environment.apiKey}/user/${UserId}`, data)
  }
}
