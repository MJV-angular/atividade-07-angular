import { Component , OnInit} from '@angular/core';
import { CourseContentFacadeService } from 'src/app/shared/core/facade/course-content.facade.service';
import { ICourseContent } from 'src/app/shared/interfaces/course-content.interface';
@Component({
  selector: 'app-feed-dashboard',
  templateUrl: './feed-dashboard.component.html',
  styleUrls: ['./feed-dashboard.component.scss']
})
export class FeedDashboardComponent implements OnInit{
  courseContent?: ICourseContent[]
  constructor(private courseContentFacade: CourseContentFacadeService){
  }

  ngOnInit(): void {
    this.courseContentFacade.getCoursesContent$.subscribe(value => this.courseContent = value.courseContent)
    console.log("dashboard",this.courseContent)
  }

}
