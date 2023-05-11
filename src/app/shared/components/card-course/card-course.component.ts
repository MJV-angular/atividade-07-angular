import { Component, Input } from '@angular/core';
import { IUserState } from '../../interfaces/user.interfaces';
import { IcourseResponse } from '../../interfaces/courses.interfaces';

@Component({
  selector: 'app-card-course',
  templateUrl: './card-course.component.html',
  styleUrls: ['./card-course.component.scss']
})
export class CardCourseComponent {
  @Input() user : IUserState | undefined;
  @Input() course : IcourseResponse | undefined

}
