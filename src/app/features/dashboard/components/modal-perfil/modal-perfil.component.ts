import { Component, OnInit } from '@angular/core';
import { PerfilModalService } from 'src/app/shared/core/sync/perfil-modal.service';
import { UserResponse } from 'src/app/shared/interfaces/api.interfaces';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiUserFacadeService } from 'src/app/shared/core/facade/api-user.facade.service';
import { LocalStorageService } from 'src/app/shared/core/sync/local-storage.service';
import moment from 'moment';
import { IUserState } from 'src/app/shared/interfaces/user.interfaces';


@Component({
  selector: 'app-modal-perfil',
  templateUrl: './modal-perfil.component.html',
  styleUrls: ['./modal-perfil.component.scss']
})
export class ModalPerfilComponent implements OnInit {
  
  user?: UserResponse;
  userData: IUserState | null = null;
  currentDate?: Date;
  newUser?: UserResponse

  constructor(public perfilServices: PerfilModalService, public userFacade: ApiUserFacadeService, private _localStorage: LocalStorageService) { }

  addressForm = new FormGroup({
    street: new FormControl("", { nonNullable: true, validators: [Validators.required] }),
    number: new FormControl(0, { nonNullable: true, validators: [Validators.required] }),
    city: new FormControl("", { nonNullable: true, validators: [Validators.required] }),
    state: new FormControl("", { nonNullable: true, validators: [Validators.required] }),
    country: new FormControl("", { nonNullable: true, validators: [Validators.required] }),
    zipCode: new FormControl("", { nonNullable: true, validators: [Validators.required] }),
  })

  userForm = new FormGroup({
    email: new FormControl("", { nonNullable: true, validators: [Validators.required, Validators.email] }),
    name: new FormControl("", { nonNullable: true, validators: [Validators.required, Validators.maxLength(50), Validators.minLength(3)] }),
    cpf: new FormControl("", { nonNullable: true, validators: [Validators.required, Validators.pattern(/^\d+$/), Validators.maxLength(11), Validators.minLength(11)] }),
    dateBirth: new FormControl<Date | string>("", { nonNullable: true, validators: [Validators.required] }),
    picture: new FormControl("", { nonNullable: true, validators: [Validators.required] }),
    address: this.addressForm,
  })

  getUser(value: string) {
    return JSON.parse(localStorage.getItem(value)!);
  }

  getDefaultValues() {
    if (this.user) {
      this.userForm.get('picture')?.setValue(this.user.picture ? this.user.picture : '');
      this.userForm.get('email')?.setValue(this.user.email);
      this.userForm.get('name')?.setValue(this.user.name);
      this.userForm.get('cpf')?.setValue(this.user.cpf);
      this.userForm.get('dateBirth')?.setValue(moment(this.user.dateBirth).format('YYYY-MM-DD'));
      this.addressForm.get('street')?.setValue(this.user.address.street);
      this.addressForm.get('city')?.setValue(this.user.address.city);
      this.addressForm.get('zipCode')?.setValue(this.user.address.zipCode.toString());
      this.addressForm.get('number')?.setValue(this.user.address.number);
      this.addressForm.get('state')?.setValue(this.user.address.state);
      this.addressForm.get('country')?.setValue(this.user.address.country);
    }
  }

  ngOnInit(): void {
    this.userFacade.getUser$.subscribe(value => this.userData = value)
    this.user = this.getUser('@USER')
    this.getDefaultValues()
  }

  onSubmit() {
    if (this.user?.id) {
      const { dateBirth, ...Data } = this.userForm.getRawValue()
      this.userFacade.updatedUser({ dateBirth: moment(this.userForm.value.dateBirth, "YYYY-MM-DD").toDate(), ...Data }, this.user.id).subscribe();
    }
  }

  close() {
    this.perfilServices.hide();
    this.getDefaultValues()
  }

}
