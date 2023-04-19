import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { UserRequest } from 'src/app/shared/interfaces/api.interfaces';
import { ApiService } from 'src/app/shared/services/api.service';
@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent implements OnInit {
  email: string = '';
  password: string = '';
  name: string = '';
  error?: string;
  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit() {}

  createUser() {
    return this.apiService.createUser({ email: this.email, name: this.name, password: this.password}).subscribe({
        error: ({error}) => {
          this.error = error.message;
        },
        complete: () => this.router.navigateByUrl('/login')
    });
  }
}
