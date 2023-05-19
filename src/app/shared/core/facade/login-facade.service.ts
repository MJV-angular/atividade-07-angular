import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { ApiSessionService as Api } from '../async/api-session.service';

import { UserStateService } from '../state/user-state.service';

import { Router } from '@angular/router';
import { ToastService } from '../sync/toast.service';
import { IUserResponse, IloginRequest } from '../../interfaces/user.interfaces';

@Injectable({
  providedIn: 'root',
})
export class LoginFacadeService {
  constructor(
    private router: Router,
    public api: Api,
    private toast: ToastService,
    public userState: UserStateService
  ) {}

  setItensLocalStorage(response: IUserResponse) {
    window.localStorage.setItem('@TOKEN', response.token!);
    window.localStorage.setItem('@USER', JSON.stringify(response.user));
  }

  redirectToPath(pathDirect: string) {
    this.router.navigateByUrl(pathDirect);
  }

  login(user: IloginRequest): Observable<IUserResponse> {
    let pathDirect: string = '/dashboard';
    return this.api.login(user).pipe(
      tap({
        next: (response: IUserResponse) => {
          this.userState.setUser(response.user);
          this.setItensLocalStorage(response);
          if (response.user.courses.length == 0) {
            this.redirectToPath('/catalog');
          } else {
            this.redirectToPath('/dashboard');
          }
        },
        error: (error: any) => {
          console.log(error.message);
        },
        complete: () => {
          this.toast.show('uma mensagem');
        },
      })
    );
  }
}
