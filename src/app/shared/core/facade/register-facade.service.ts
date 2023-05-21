import { Injectable } from '@angular/core';
import { ApiUserService } from '../async/api-user.service';
import { UserRequest } from '../../interfaces/user.interfaces';
import { tap } from 'rxjs';
import { Router } from '@angular/router';
import { ModalService } from '../sync/modal.service';

@Injectable({
  providedIn: 'root',
})
export class RegisterFacadeService {
  constructor(private apiUser: ApiUserService, private router: Router, private modal:ModalService) {}

  createUser(user: UserRequest) {
    return this.apiUser.createUser(user).pipe(
      tap({
        error: (error: any) => {
          this.modal.show(error.error.message,"error");
        },
        complete: () => {
          this.router.navigate(['/login']);
        },
      })
    );
  }
}
