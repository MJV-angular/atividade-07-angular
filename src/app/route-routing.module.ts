import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/guards/auth.guard';
const routes: Routes = [

  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  { path: 'dashboard', loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule),
  canActivate: [AuthGuard]
},

  { path: 'home', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule) },

  { path: 'login', loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule) },

  { path: 'register', loadChildren: () => import('./features/register/register.module').then(m => m.RegisterModule) },

  { path: 'catalog', loadChildren: () => import('./features/catalog/catalog.module').then(m => m.CatalogModule),
  canActivate: [AuthGuard]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RouteRoutingModule { }
