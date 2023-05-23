import { Component, Input } from '@angular/core';
import { IUserState } from '../../interfaces/user.interfaces';
import { CourseUser } from '../../interfaces/register-courses.interfaces';


@Component({
  selector: 'app-card-course',
  templateUrl: './card-course.component.html',
  styleUrls: ['./card-course.component.scss']
})
export class CardCourseComponent {
  @Input() user : IUserState | undefined;
  @Input() course : CourseUser | undefined

}
