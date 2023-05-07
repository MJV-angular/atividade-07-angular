import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { ApiSessionService as Api } from '../async/api-session.service';
import { UserResponse } from '../../interfaces/api.interfaces';
import { UserStateService } from '../state/user-state.service';
import { IloginRequest } from '../../interfaces/api.interfaces';
import { Router } from '@angular/router';
import { ToastService } from '../../services/toast.service';

@Injectable({
  providedIn: 'root'
})
export class ApiSessionFacadeService {

  constructor(private router: Router, public api: Api, private toast: ToastService, public userState: UserStateService) { }


  login(user: IloginRequest): Observable<UserResponse> {
    return this.api.login(user).pipe(
      tap({
        next: (response: UserResponse) => {
          this.userState.setUser(response);
          window.localStorage.setItem('@TOKEN', response.token!);
          window.localStorage.setItem('@USER', JSON.stringify(response));
          this.toast.show(`Bem vindo`)
        },
        error: (error: any) => {
          console.log(error.message);
        },
        complete: () => {

          this.router.navigateByUrl('/dashboard');
        }
      })
    )
  }

}
