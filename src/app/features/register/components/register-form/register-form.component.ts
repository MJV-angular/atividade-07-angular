import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiUserService } from 'src/app/shared/core/async/api-user.service';
import { ApiUserFacadeService } from 'src/app/shared/core/facade/api-user.facade.service';
import { UserRequest } from 'src/app/shared/interfaces/api.interfaces';
import moment from 'moment';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})

export class RegisterFormComponent {

  currentDate: string = moment(Date.now()).format('YYYY-MM-DD')

  constructor(private userFacade: ApiUserFacadeService, private router: Router) { }

  addressForm = new FormGroup({
    street: new FormControl("", { nonNullable: true, validators: [Validators.required] }),
    number: new FormControl("", { nonNullable: true, validators: [Validators.required] }),
    city: new FormControl("", { nonNullable: true, validators: [Validators.required] }),
    state: new FormControl("", { nonNullable: true, validators: [Validators.required] }),
    country: new FormControl("", { nonNullable: true, validators: [Validators.required] }),
    zipCode: new FormControl("", { nonNullable: true, validators: [Validators.required] }),
  })

  userForm = new FormGroup({
    email: new FormControl("", { nonNullable: true, validators: [Validators.required, Validators.email] }),
    name: new FormControl("", { nonNullable: true, validators: [Validators.required, Validators.maxLength(50), Validators.minLength(3)] }),
    cpf: new FormControl("", { nonNullable: true, validators: [Validators.required, Validators.pattern(/^\d+$/), Validators.maxLength(11), Validators.minLength(11)] }),
    dateBirth: new FormControl<Date| string>(this.currentDate, { nonNullable: true, validators: [Validators.required] }),
    picture: new FormControl("", { nonNullable: true, validators: [Validators.required] }),
    password: new FormControl("", { nonNullable: true, validators: [Validators.required, Validators.minLength(6)] }),
    address: this.addressForm
  })

  formatDate(date: string| undefined| Date) {
    return moment(date, "YYYY-MM-DD").toDate()
  }

  createUser() {
    const {dateBirth, ...withOutDateBirth} = this.userForm.getRawValue()
    this.userFacade.addUser({...withOutDateBirth, dateBirth: this.formatDate(this.userForm.value.dateBirth)})
      .subscribe({
        next: () => console.log('Todo criado'),
        error: (error) => console.log(`erro: ${error.message}`),
        complete: () => this.router.navigateByUrl('/login')
      });
  }
}
