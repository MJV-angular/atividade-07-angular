import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { PopupComponent } from './components/popup/popup.component';
import { LoadingComponent } from './components/loading/loading.component';
import { LoadingInterceptor } from './interceptors/loading.interceptor';
@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PopupComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    LoadingComponent
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
