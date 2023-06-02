import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { ApiSessionService as Api } from '../async/api-session.service';
import { UserStateService } from '../state/user-state.service';
import { Router } from '@angular/router';
import { ToastService } from '../sync/toast.service';
import { IUserResponse, IloginRequest } from '../../interfaces/user.interfaces';
import { ModalService } from '../sync/modal.service';
import { TokenFacadeService } from './token-facade.service';
@Injectable({
  providedIn: 'root',
})
export class LoginFacadeService {

  name: string = ''
  constructor(
    private router: Router,
    public api: Api,
    private toast: ToastService,
    public userState: UserStateService,
    private modal: ModalService,
    private token:TokenFacadeService
  ) {}

  setItensLocalStorage(response: IUserResponse) {
    window.localStorage.setItem('@TOKEN', response.token!);
    window.localStorage.setItem('@USER', JSON.stringify(response.user));
  }

  redirectToPath(pathDirect: string) {
    this.router.navigateByUrl(pathDirect);
  }

  login(user: IloginRequest): Observable<IUserResponse> {
    return this.api.login(user).pipe(
      tap({
        next: (response: IUserResponse) => {
          this.userState.setUser(response.user);
          this.setItensLocalStorage(response);
          this.name = response.user.name
          this.token.setToken(response.token);
          if (response.user.courses.length == 0) {
            this.redirectToPath('/catalog');
          } else {
            this.redirectToPath('/dashboard');
          }
        },
        error: (error: any) => {
          this.modal.show(error.error.message,"error");
        },
        complete: () => {
          this.toast.show(`Seja bem-vindo! ${this.name}`, 'success');
        },
      })
    );
  }
}
