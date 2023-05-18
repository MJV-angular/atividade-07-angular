import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { ICourseContent, MergedCourseContentAndCourseContentUser } from 'src/app/shared/interfaces/course-content.interface';

@Component({
  selector: 'app-course-content',
  templateUrl: './course-content.component.html',
  styleUrls: ['./course-content.component.scss'],

})

export class CourseContentComponent  {

  @Input() courseContent: MergedCourseContentAndCourseContentUser | null = null;
  @Output() completedCourse = new EventEmitter();


  emitEvent(id: number) {
    this.completedCourse.emit(id)
  }
}
