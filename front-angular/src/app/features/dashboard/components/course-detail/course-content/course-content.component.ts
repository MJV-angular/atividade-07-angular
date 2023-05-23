import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { CourseContent, CourseContentUser } from 'src/app/shared/interfaces/register-courses.interfaces';
@Component({
  selector: 'app-course-content',
  templateUrl: './course-content.component.html',
  styleUrls: ['./course-content.component.scss'],

})

export class CourseContentComponent  {

  @Input() courseContent: CourseContentUser | null = null;
  @Output() completedCourse = new EventEmitter();


  emitEvent(id: number) {
    this.completedCourse.emit(id)
  }
}
