import { Component , Input, OnInit} from '@angular/core';
import { CourseContent } from 'src/app/shared/interfaces/register-courses.interfaces';

@Component({
  selector: 'app-feed-dashboard',
  templateUrl: './feed-dashboard.component.html',
  styleUrls: ['./feed-dashboard.component.scss']
})
export class FeedDashboardComponent {
  @Input() courseContent: [] | CourseContent[]   = [];

}
