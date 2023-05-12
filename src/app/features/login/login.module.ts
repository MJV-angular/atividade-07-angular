import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    LoginComponent,
    LoginFormComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class LoginModule { }
