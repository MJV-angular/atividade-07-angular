import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard/dashboard.component';
import { CourseDetailComponent } from './pages/course-detail/course-detail/course-detail.component';
const routes: Routes = [
  {
    path: '', component: DashboardComponent
  },

  {
    path: ':id', component: CourseDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
