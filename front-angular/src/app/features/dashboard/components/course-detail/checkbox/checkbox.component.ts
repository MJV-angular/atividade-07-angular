
import { Component, Input} from '@angular/core';
import { CourseContent } from 'src/app/shared/interfaces/register-courses.interfaces';


@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent {
  @Input() coursesContent?: CourseContent;
  @Input() class!: string;
  @Input() checked: boolean = false;

}
