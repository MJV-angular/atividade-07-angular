import { Component, Input } from '@angular/core';
import { CourseUser } from 'src/app/shared/interfaces/register-courses.interfaces';
@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.scss']
})
export class MyCoursesComponent{

  @Input() mycourses?: CourseUser[]

}
