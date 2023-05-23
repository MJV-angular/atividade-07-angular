import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CourseContent, CourseContentUser } from 'src/app/shared/interfaces/register-courses.interfaces';
@Component({
  selector: 'app-aside-course',
  templateUrl: './aside-course.component.html',
  styleUrls:['./aside-course.component.scss']
})
export class AsideCourseComponent {
  @Input() coursesContentUser : CourseContentUser[] | null = null;
  @Output() selectedCourseContent = new EventEmitter<number>();
  idSelected : number | null = null

  emitEvent(id: number, itemid: number ) {
    this.idSelected = id
    this.selectedCourseContent.emit(itemid);
  }

}
