import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/services/api.service';
@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent implements OnInit {

  currentDate: Date = new Date(Date.now())

  userForm = new FormGroup({
    email: new FormControl("", { nonNullable: true, validators: [Validators.required, Validators.email] }),
    name: new FormControl("", { nonNullable: true, validators: [Validators.required, Validators.maxLength(50), Validators.minLength(3)] }),
    cpf: new FormControl("", { nonNullable: true, validators: [Validators.required, Validators.pattern(/^\d+$/), Validators.maxLength(11), Validators.minLength(11)] }),
    dateBirth: new FormControl(this.currentDate, { nonNullable: true, validators: [Validators.required] }),
    picture: new FormControl("", { nonNullable: true, validators: [Validators.required] }),
    password: new FormControl("", { nonNullable: true, validators: [Validators.required, Validators.minLength(6)] }),
  })

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit() {
    this.currentDate = new Date(Date.now())
  }

  formatDate() {
    if (this.userForm.value.dateBirth)
      this.userForm.value.dateBirth = new Date(new Date(this.userForm.value.dateBirth.toString()))
  }

  onSubmit() {
    this.formatDate()
    return this.apiService.createUser(this.userForm.getRawValue()).subscribe({
      error: ({ error }) => {
        console.log(error)
      },
      complete: () => this.router.navigateByUrl('/login')
    });
  }
}
