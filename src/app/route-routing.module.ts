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
    pathMatch: 'full',
    redirectTo: 'home',
  },
  { path: 'dashboard', loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule) },

  { path: 'home', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule) },

  { path: 'login', loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule) },

  { path: 'register', loadChildren: () => import('./features/register/register.module').then(m => m.RegisterModule) },

  { path: 'catalog', loadChildren: () => import('./features/catalog/catalog.module').then(m => m.CatalogModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RouteRoutingModule { }
