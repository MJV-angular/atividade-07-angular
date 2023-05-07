import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/pages/home/home.component';
import { RegisterComponent } from './features/register/pages/register/register.component';
import { LoginComponent } from './features/login/pages/login/login.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { DashboardComponent } from './features/dashboard/pages/dashboard/dashboard.component';
import { CatalogComponent } from './features/catalog/page/catalog/catalog.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },

  {
    path: 'catalog',
    component: CatalogComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RouteRoutingModule {}
