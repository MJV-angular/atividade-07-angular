import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICourseContent, MergedCourseContentAndCourseContentUser} from 'src/app/shared/interfaces/course-content.interface';
@Component({
  selector: 'app-aside-course',
  templateUrl: './aside-course.component.html',
  styleUrls:['./aside-course.component.scss']
})
export class AsideCourseComponent {
  @Input() coursesContent? : MergedCourseContentAndCourseContentUser[] | null;
  @Output() selectedCourseContent = new EventEmitter<number>();
  idSelected : number | null = null
  emitEvent(id: number) {
    this.idSelected = id
    this.selectedCourseContent.emit(id);
  }
}
