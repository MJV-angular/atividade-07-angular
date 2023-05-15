import { Component, Input } from '@angular/core';
import { ICourseContent} from 'src/app/shared/interfaces/course-content.interface';
@Component({
  selector: 'app-aside-course',
  templateUrl: './aside-course.component.html',
  styleUrls:['./aside-course.component.scss']
})
export class AsideCourseComponent {
  @Input() coursesContent? : ICourseContent[];
}
