import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard/dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MyCoursesComponent } from './components/dashboard/my-courses/my-courses.component';
import { MyCoursesListComponent } from './components/dashboard/my-courses-list/my-courses-list.component';
import { MyCoursesListItemComponent } from './components/dashboard/my-courses-list-item/my-courses-list-item.component';
import { FeedDashboardComponent } from './components/dashboard/feed-dashboard/feed-dashboard.component';
import { ChatDashboardComponent } from './components/dashboard/chat-dashboard/chat-dashboard.component';
import { SearchDashboardComponent } from './components/dashboard/search-dashboard/search-dashboard.component';
import { FeedListDashboardComponent } from './components/dashboard/feed-list-dashboard/feed-list-dashboard.component';
import { FeedListDashboardItemComponent } from './components/dashboard/feed-list-dashboard-item/feed-list-dashboard-item.component';
import { CoursesListDashboardComponent } from './components/dashboard/courses-list-dashboard/courses-list-dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalPerfilComponent } from './components/dashboard/modal-perfil/modal-perfil.component';
import { CourseDetailComponent } from './pages/course-detail/course-detail/course-detail.component';
import { AsideCourseComponent } from './components/course-detail/aside-course/aside-course.component';
import { CheckboxComponent } from './components/course-detail/checkbox/checkbox.component';
@NgModule({
  declarations: [
    DashboardComponent,
    MyCoursesComponent,
    MyCoursesListComponent,
    MyCoursesListItemComponent,
    FeedDashboardComponent,
    ChatDashboardComponent,
    SearchDashboardComponent,
    FeedListDashboardComponent,
    FeedListDashboardItemComponent,
    CoursesListDashboardComponent,
    ModalPerfilComponent,
    CourseDetailComponent,
    AsideCourseComponent,
    CheckboxComponent

  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    DashboardComponent,
    AsideCourseComponent
  ]
})
export class DashboardModule { }
