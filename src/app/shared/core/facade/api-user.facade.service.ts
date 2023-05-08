import { Injectable } from '@angular/core';
import { ApiUserService } from '../async/api-user.service';
import { UserStateService } from '../state/user-state.service';
import { UserRequest, UserResponse} from '../../interfaces/api.interfaces';
import { Observable, distinctUntilChanged, map, shareReplay, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiUserFacadeService {

  constructor(private apiServices: ApiUserService,
    private userState: UserStateService){

  }


  readonly userCourses$ = this.userState
  .getState()
  .pipe(
    map((state) => state.courses),
    distinctUntilChanged(),
    shareReplay(1),
  );


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
