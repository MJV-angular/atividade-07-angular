import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { HomeAnimationComponent } from './components/home-animation/home-animation.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeMainComponent } from './components/home-main/home-main.component';


@NgModule({
  declarations: [
    HomeComponent,
    HomeAnimationComponent,
    HomeMainComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    HomeComponent,
    HomeAnimationComponent,
    HomeMainComponent,
  ]
})
export class HomeModule { }
