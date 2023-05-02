import { Component, OnInit } from '@angular/core';
import { PerfilModalService } from 'src/app/shared/services/perfil-modal.service';
import { UserResponse } from 'src/app/shared/interfaces/api.interfaces';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import moment from 'moment';
@Component({
  selector: 'app-perfil-updated',
  templateUrl: './perfil-updated.component.html',
  styleUrls: ['./perfil-updated.component.scss']
})
export class PerfilUpdatedComponent implements OnInit {
  user?: UserResponse
  currentDate: Date | undefined;

  constructor(public perfilServices: PerfilModalService) { }

  addressForm = new FormGroup({
    street: new FormControl("" , { nonNullable: true, validators: [Validators.required]}),
    number: new FormControl("", { nonNullable: true, validators: [Validators.required]}),
    city: new FormControl("", { nonNullable: true, validators: [Validators.required]}),
    state: new FormControl("", { nonNullable: true, validators: [Validators.required]}),
    country: new FormControl("", { nonNullable: true, validators: [Validators.required]}),
    zipCode: new FormControl("", { nonNullable: true, validators: [Validators.required]}),
  })


  userForm = new FormGroup({
    email: new FormControl("" , { nonNullable: true, validators: [Validators.required, Validators.email] }),
    name: new FormControl("", { nonNullable: true, validators: [Validators.required, Validators.maxLength(50), Validators.minLength(3)] }),
    cpf: new FormControl("", { nonNullable: true, validators: [Validators.required, Validators.pattern(/^\d+$/), Validators.maxLength(11), Validators.minLength(11)] }),
    dateBirth: new FormControl("", { nonNullable: true, validators: [Validators.required] }),
    picture: new FormControl("", { nonNullable: true, validators: [Validators.required] }),
    password: new FormControl("", { nonNullable: true, validators: [Validators.required, Validators.minLength(6)] }),
    address: this.addressForm,
  })

  ngOnInit(): void {
    const userSession = localStorage.getItem('@USER');
    if (userSession) {
      this.user = JSON.parse(userSession)

      if (this.user) {
        this.userForm.get('picture')?.setValue(this.user.picture ? this.user.picture : '');
        this.userForm.get('email')?.setValue(this.user.email);
        this.userForm.get('name')?.setValue(this.user.name);
        this.userForm.get('cpf')?.setValue(this.user.cpf);
        this.userForm.get('dateBirth')?.setValue(moment(this.user.dateBirth).format('YYYY-MM-DD'));
        this.addressForm.get('street')?.setValue(this.user.address.street);
        this.addressForm.get('city')?.setValue(this.user.address.city);
        this.addressForm.get('zipCode')?.setValue(this.user.address.zipCode.toString());
        this.addressForm.get('number')?.setValue(this.user.address.number.toString());
        this.addressForm.get('state')?.setValue(this.user.address.state);
      }
    }

  }

  onSubmit() {
    console.log("hi")
    console.log(this.userForm.value)
  }
}
