import { Component, Input } from '@angular/core';
import { IRegisterCourseResponse } from 'src/app/shared/interfaces/register-courses.interfaces';
import { OnInit } from '@angular/core';
import { IcourseResponse } from 'src/app/shared/interfaces/courses.interfaces';
@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.scss']
})
export class MyCoursesComponent{

  @Input() mycourses?: IcourseResponse[]

}
