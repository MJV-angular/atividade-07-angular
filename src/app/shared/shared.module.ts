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

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ToastComponent,
    LoadingComponent,
    CardSimpleComponent,
    CardPictureTextComponent,
    ModalComponent,
    PicturePerfilComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    LoadingComponent,
    CardSimpleComponent,
    CardPictureTextComponent,
    ModalComponent,
    ToastComponent,
    PicturePerfilComponent
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
