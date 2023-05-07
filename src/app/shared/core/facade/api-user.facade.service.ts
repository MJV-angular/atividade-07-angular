import { Injectable } from '@angular/core';
import { ApiUserService } from '../async/api-user.service';
import { UserStateService } from '../state/user-state.service';
import { UserRequest, UserResponse} from '../../interfaces/api.interfaces';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiUserFacadeService {

  constructor(private apiServices: ApiUserService,
    private userState: UserStateService){

  }

  addUser(user: UserRequest): Observable<UserResponse> {
    return this.apiServices.createUser(user).pipe(
      tap((response) => {
        this.userState.setUser(response)
      })
    )
  }

  updatedUser(user: Partial<UserRequest>, id: number): Observable<UserResponse> {
    return this.apiServices.updatedUser(user, id).pipe(
      tap((response) => {
        this.userState.editeUser(response)
      })
    )
  }
}
