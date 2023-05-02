import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilUpdatedComponent } from './components/perfil-updated/perfil-updated.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    PerfilUpdatedComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule
  ],
  exports:[
    PerfilUpdatedComponent
  ]
})
export class PerfilModule { }
