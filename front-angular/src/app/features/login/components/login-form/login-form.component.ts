import { Component, ElementRef, OnDestroy, ViewChild, AfterContentInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IUser } from 'src/app/shared/interfaces/user.interfaces';
import { ToastService } from 'src/app/shared/core/sync/toast.service';
import { LoginFacadeService } from 'src/app/shared/core/facade/login-facade.service';
import { Subscription } from 'rxjs';
import { gsap } from 'gsap';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnDestroy, AfterContentInit  {
  token?: string;
  user?: IUser;
  error?: string;

  @ViewChild('modal', { static: true })
  modal!: ElementRef;

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

  ngAfterContentInit() {
    gsap.fromTo(
      this.modal.nativeElement,
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
}
