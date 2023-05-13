import { Component, Input } from '@angular/core';
import { IcourseResponse } from 'src/app/shared/interfaces/courses.interfaces';
import { IUserState } from 'src/app/shared/interfaces/user.interfaces';

@Component({
  selector: 'app-courses-list-dashboard',
  templateUrl: './courses-list-dashboard.component.html',
  styleUrls: ['./courses-list-dashboard.component.scss']
})

export class CoursesListDashboardComponent {
  @Input() user! : IUserState | null;
  @Input() courses : IcourseResponse[] | null  = null
}
