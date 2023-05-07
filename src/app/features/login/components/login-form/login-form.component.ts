import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserRequest, UserResponse } from 'src/app/shared/interfaces/api.interfaces';
import { ApiSessionService } from 'src/app/shared/core/async/api-session.service';
import { ToastService } from 'src/app/shared/services/toast.service';
import { ApiSessionFacadeService } from 'src/app/shared/core/facade/api-session.service.facade';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})

export class LoginFormComponent {
  token?: string;
  user?: UserResponse;
  error?: string;

  userForm = new FormGroup({
    email: new FormControl<string>("", {
      nonNullable: true,
      validators: [Validators.required, Validators.email]
    }),
    password: new FormControl<string>("", {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(6)]
    })
  })

  constructor(private apiService: ApiSessionFacadeService, public toast: ToastService) { }

  login() {
    return this.apiService
      .login(this.userForm.getRawValue())
      .subscribe((value) => {
        console.log(value)
        this.token = value.token;
        this.user = value;
      });
  }
}
