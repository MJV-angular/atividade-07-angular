import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PerfilComponent } from './components/perfil/perfil.component';
import { AsideComponent } from './components/aside/aside.component';
import { DashboardMainComponent } from './components/dashboard-main/dashboard-main.component';
import { PerfilModule } from '../perfil/perfil.module';
import { MyCoursesComponent } from './components/my-courses/my-courses.component';
import { MyCoursesListComponent } from './components/my-courses-list/my-courses-list.component';
import { MyCoursesListItemComponent } from './components/my-courses-list-item/my-courses-list-item.component';
import { FeedDashboardComponent } from './components/feed-dashboard/feed-dashboard.component';
import { ChatDashboardComponent } from './components/chat-dashboard/chat-dashboard.component';
import { SearchDashboardComponent } from './components/search-dashboard/search-dashboard.component';


@NgModule({
  declarations: [
    DashboardComponent,
    PerfilComponent,
    AsideComponent,
    DashboardMainComponent,
    MyCoursesComponent,
    MyCoursesListComponent,
    MyCoursesListItemComponent,
    FeedDashboardComponent,
    ChatDashboardComponent,
    SearchDashboardComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    PerfilModule
  ],
  exports:[
    DashboardComponent,
    DashboardMainComponent
  ]

})
export class DashboardModule { }
