import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IUser } from 'src/app/shared/interfaces/user.interfaces';
import { ToastService } from 'src/app/shared/core/sync/toast.service';
import { LoginFacadeService } from 'src/app/shared/core/facade/login-facade.service';
import { Subscription } from 'rxjs';

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

  private loginSubscription: Subscription = new Subscription();

  constructor(
    public toast: ToastService,
    private loginFacade: LoginFacadeService
  ) {}

  ngOnDestroy(): void {
    this.loginSubscription.unsubscribe();
  }

  login() {
    this.loginSubscription = this.loginFacade
      .login(this.userForm.getRawValue())
      .subscribe();
  }
}
