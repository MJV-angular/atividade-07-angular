import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouteRoutingModule } from './route-routing.module';
import { SharedModule } from "./shared/shared.module";
import { HomeModule } from './features/home/home.module';
import { LoginModule } from './features/login/login.module';
import { RegisterModule } from './features/register/register.module';
import { DashboardModule } from './features/dashboard/dashboard.module';
import { CatalogModule } from './features/catalog/catalog.module';

@NgModule({
  declarations: [
    AppComponent,

  ],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    RouteRoutingModule,
    SharedModule,
    HomeModule,
    LoginModule,
    RegisterModule,
    DashboardModule,
    CatalogModule,

  ]
})
export class AppModule { }
