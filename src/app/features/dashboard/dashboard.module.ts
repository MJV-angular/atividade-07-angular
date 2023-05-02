import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PerfilComponent } from './components/perfil/perfil.component';
import { AsideComponent } from './components/aside/aside.component';
import { DashboardMainComponent } from './components/dashboard-main/dashboard-main.component';
import { PerfilModule } from '../perfil/perfil.module';



@NgModule({
  declarations: [
    DashboardComponent,
    PerfilComponent,
    AsideComponent,
    DashboardMainComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    PerfilModule
  ],
  exports:[
    DashboardComponent,
    DashboardMainComponent
  ]

})
export class DashboardModule { }
