import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PerfilComponent } from './components/perfil/perfil.component';
import { AsideComponent } from './components/aside/aside.component';



@NgModule({
  declarations: [
    DashboardComponent,
    PerfilComponent,
    AsideComponent
  ],
  imports: [
    SharedModule,
    CommonModule
  ],
  exports:[
    DashboardComponent
  ]

})
export class DashboardModule { }
