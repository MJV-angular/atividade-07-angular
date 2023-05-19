import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IUser } from 'src/app/shared/interfaces/user.interfaces';
import { ToastService } from 'src/app/shared/core/sync/toast.service';
import { LoginFacadeService } from 'src/app/shared/core/facade/login-facade.service';
import { ApiSessionFacadeService } from 'src/app/shared/core/facade/api-session.service.facade';
import { Subscription } from 'rxjs';
import { ModalService } from 'src/app/shared/core/sync/modal.service';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnDestroy {
  token?: string;
  user?: IUser;
  error?: string;

  userForm = new FormGroup({
    email: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
    password: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(6)],
    }),
  });

  private loginSubscription?: Subscription;

  constructor(
    private apiService: ApiSessionFacadeService,
    public toast: ToastService,
    private loginFacade: LoginFacadeService,
    private modal: ModalService
  ) {}

  ngOnDestroy(): void {
    if (this.loginSubscription) {
      this.loginSubscription.unsubscribe();
    }
  }

  login() {
    this.loginSubscription = this.loginFacade
      .login(this.userForm.getRawValue())
      .subscribe();
  }
}
