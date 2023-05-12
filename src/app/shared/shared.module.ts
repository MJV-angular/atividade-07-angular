import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { LoadingComponent } from './components/loading/loading.component';
import { LoadingInterceptor } from './interceptors/loading.interceptor';
import { CardSimpleComponent } from './components/card-simple/card-simple.component';
import { CardPictureTextComponent } from './components/card-picture-text/card-picture-text.component';
import { ModalComponent } from './components/modal/modal.component';
import { PicturePerfilComponent } from './components/picture-perfil/picture-perfil.component';
import { ToastComponent } from './components/toast/toast.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CardCourseComponent } from './components/card-course/card-course.component';
import { SliderComponent } from './components/slider/slider.component';
import { NextDirective } from './directives/next.directive';
import { PrevDirective } from './directives/prev.directive';
import { InputSearchComponent } from './components/input-search/input-search.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ToastComponent,
    LoadingComponent,
    CardSimpleComponent,
    CardPictureTextComponent,
    ModalComponent,
    PicturePerfilComponent,
    SidebarComponent,
    CardCourseComponent,
    SliderComponent,
    NextDirective,
    PrevDirective,
    InputSearchComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    LoadingComponent,
    CardSimpleComponent,
    CardPictureTextComponent,
    ModalComponent,
    ToastComponent,
    PicturePerfilComponent,
    SidebarComponent,
    CardCourseComponent,
    SliderComponent,
    InputSearchComponent
  ],
  providers:[
    {
      provide: HTTP_INTERCEPTORS,
      useClass:LoadingInterceptor,
      multi: true
    }
  ]
})
export class SharedModule { }
