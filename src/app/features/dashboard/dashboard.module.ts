import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard/dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardMainComponent } from './components/main-dashboard/dashboard-main.component';
import { MyCoursesComponent } from './components/my-courses/my-courses.component';
import { MyCoursesListComponent } from './components/my-courses-list/my-courses-list.component';
import { MyCoursesListItemComponent } from './components/my-courses-list-item/my-courses-list-item.component';
import { FeedDashboardComponent } from './components/feed-dashboard/feed-dashboard.component';
import { ChatDashboardComponent } from './components/chat-dashboard/chat-dashboard.component';
import { SearchDashboardComponent } from './components/search-dashboard/search-dashboard.component';
import { FeedListDashboardComponent } from './components/feed-list-dashboard/feed-list-dashboard.component';
import { FeedListDashboardItemComponent } from './components/feed-list-dashboard-item/feed-list-dashboard-item.component';
import { CoursesListDashboardComponent } from './components/courses-list-dashboard/courses-list-dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalPerfilComponent } from './components/modal-perfil/modal-perfil.component';
import { CourseDetailComponent } from './pages/course-detail/course-detail/course-detail.component';


@NgModule({
  declarations: [
    DashboardComponent,
    DashboardMainComponent,
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
    DashboardMainComponent
  ]
})
export class DashboardModule { }
