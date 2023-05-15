import { Component , Input, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { CourseContentFacadeService } from 'src/app/shared/core/facade/course-content.facade.service';
import { ICourseContent } from 'src/app/shared/interfaces/course-content.interface';
@Component({
  selector: 'app-feed-dashboard',
  templateUrl: './feed-dashboard.component.html',
  styleUrls: ['./feed-dashboard.component.scss']
})
export class FeedDashboardComponent {
  @Input() courseContent: [] | ICourseContent[]   = [];

}
