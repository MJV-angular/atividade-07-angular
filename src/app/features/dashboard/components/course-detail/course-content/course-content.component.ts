import { Component, Input } from '@angular/core';
import { ICourseContent } from 'src/app/shared/interfaces/course-content.interface';

@Component({
  selector: 'app-course-content',
  templateUrl: './course-content.component.html',
  styleUrls: ['./course-content.component.scss'],

})

export class CourseContentComponent {
  @Input() courseContent: ICourseContent | null =  null;
}
