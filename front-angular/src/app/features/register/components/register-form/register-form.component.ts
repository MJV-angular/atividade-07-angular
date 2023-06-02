import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterFacadeService } from 'src/app/shared/core/facade/register-facade.service';
import moment from 'moment';
import { ModalService } from 'src/app/shared/core/sync/modal.service';
import { Subscription } from 'rxjs';
import { gsap } from 'gsap';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent implements OnDestroy {
  currentDate: string = moment(Date.now()).format('YYYY-MM-DD');
  private subscription: Subscription = new Subscription();

  constructor(
    private router: Router,
    private registerFacade: RegisterFacadeService,
    private modal: ModalService
  ) {}

  @ViewChild('form', { static: true })
  form!: ElementRef;

  ngAfterContentInit() {
    gsap.fromTo(
      this.form.nativeElement,
      {
        opacity:0,
        y: 500,
      },
      {
        opacity:1,
        y: 0,
        duration: 0.5,
      }
    );

  }

  addressForm = new FormGroup({
    street: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    number: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    city: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    state: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    country: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    zipCode: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
  });

  userForm = new FormGroup({
    email: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.email] }),
    name: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.maxLength(50), Validators.minLength(3)],
    }),
    cpf: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.pattern(/^\d+$/), Validators.maxLength(11), Validators.minLength(11)],
    }),
    dateBirth: new FormControl<Date | string>(this.currentDate, { nonNullable: true, validators: [Validators.required] }),
    picture: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    password: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.minLength(6)] }),
    address: this.addressForm,
  });

  formatDate(date: string | undefined | Date) {
    return moment(date, 'YYYY-MM-DD').toDate();
  }

  createUser() {
    const { dateBirth, ...withOutDateBirth } = this.userForm.getRawValue();
    this.subscription.add(
      this.registerFacade.createUser({ ...withOutDateBirth, dateBirth: this.formatDate(this.userForm.value.dateBirth) }).subscribe({
        next: () => console.log('user criado'),
        error: (error) => console.log(`erro: ${error.message}`),
        complete: () => this.router.navigateByUrl('/login'),
      })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
