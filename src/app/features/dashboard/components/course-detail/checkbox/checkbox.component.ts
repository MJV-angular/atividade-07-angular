import { Component, Input} from '@angular/core';
import { ICourseContent } from 'src/app/shared/interfaces/course-content.interface';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent {
  @Input() coursesContent? : ICourseContent;
}
