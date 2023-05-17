import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICourseContent} from 'src/app/shared/interfaces/course-content.interface';
@Component({
  selector: 'app-aside-course',
  templateUrl: './aside-course.component.html',
  styleUrls:['./aside-course.component.scss']
})
export class AsideCourseComponent {
  @Input() coursesContent? : ICourseContent[];
  @Output() selectedCourseContent = new EventEmitter<ICourseContent>();
  isChecked = false;
  idSelected : number | null = null
  emitEvent(item:ICourseContent) {
    this.idSelected = item.id
    this.isChecked = !this.isChecked;
    this.selectedCourseContent.emit(item);
  }
}
