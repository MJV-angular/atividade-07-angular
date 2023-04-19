import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/services/api.service';
import { UserResponse } from 'src/app/shared/interfaces/api.interfaces';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  email: string = '';
  password: string = '';
  token: string = '';
  user?: UserResponse;
  error?: string;

  constructor(private router: Router, private apiService: ApiService) {}

  login() {
    return this.apiService
      .login({ email: this.email, password: this.password })
      .subscribe({
        next: ({ token, user }) => {
          this.token = token;
          this.user = user;
        },
        error: ({error}) => {
          this.error = error.message;
        },
        complete: () => {
          window.localStorage.setItem('@TOKEN', this.token);
          window.localStorage.setItem('@USER', JSON.stringify(this.user));
          this.router.navigateByUrl('/dashboard');
        },
      });
  }
}
