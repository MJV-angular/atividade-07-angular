import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CourseUser } from 'src/app/shared/interfaces/register-courses.interfaces';
import { IUserState } from 'src/app/shared/interfaces/user.interfaces';

@Component({
  selector: 'app-search-dashboard',
  templateUrl: './search-dashboard.component.html',
  styleUrls: ['./search-dashboard.component.scss']
})
export class SearchDashboardComponent {
  @Input() user : IUserState | null = null;
  @Input() courses : CourseUser[] | null = null;
  @Input() searchForm!: FormGroup;
}
