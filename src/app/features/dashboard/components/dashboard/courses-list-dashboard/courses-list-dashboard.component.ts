import { Component, Input } from '@angular/core';
import { CourseUser} from 'src/app/shared/interfaces/register-courses.interfaces';
import { IUserState } from 'src/app/shared/interfaces/user.interfaces';

@Component({
  selector: 'app-courses-list-dashboard',
  templateUrl: './courses-list-dashboard.component.html',
  styleUrls: ['./courses-list-dashboard.component.scss']
})

export class CoursesListDashboardComponent {
  @Input() user! : IUserState | null;
  @Input() courses : CourseUser[] | null  = null
}
