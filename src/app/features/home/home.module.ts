import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { AnimationHomeComponent } from './components/animation-home/animation-home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeMainComponent } from './components/home-main/home-main.component';


@NgModule({
  declarations: [
    HomeComponent,
    AnimationHomeComponent,
    HomeMainComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    HomeComponent,
    AnimationHomeComponent,
    HomeMainComponent,
  ]
})
export class HomeModule { }
