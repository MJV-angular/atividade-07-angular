import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeMainComponent } from './components/home-main/home-main.component';
import { HomeAnimationComponent } from './components/home-animation/home-animation.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
    declarations: [
        HomeComponent,
        HomeAnimationComponent,
        HomeMainComponent,
    ],
    exports: [
        HomeComponent,
        HomeAnimationComponent,
        HomeMainComponent,
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        SharedModule
    ]
})
export class HomeModule { }
