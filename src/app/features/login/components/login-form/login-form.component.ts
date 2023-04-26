import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/services/api.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserRequest } from 'src/app/shared/interfaces/api.interfaces';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {

  token?: string;
  user?: UserRequest;
  error? : string;

  userForm = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required, Validators.minLength(6)]),
  })

  constructor(private router: Router, private apiService: ApiService) {
    console.log(this.userForm)
  }

  login() {
    return this.apiService
      .login(this.userForm.value)
      .subscribe({
        next: ({ token, user }) => {
          this.token = token;
          this.user = user;
        },
        error: ({error}) => {
          this.error = error.message;
        },
        complete: () => {
          window.localStorage.setItem('@TOKEN', this.token!);
          window.localStorage.setItem('@USER', JSON.stringify(this.user));
          this.router.navigateByUrl('/dashboard');
        },
      });
  }
}
