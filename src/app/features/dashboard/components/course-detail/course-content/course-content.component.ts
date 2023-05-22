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

  teste() {
    console.log("hi")
    const iframe: HTMLIFrameElement = document.querySelector('#iframe')!;
    if (iframe.contentDocument!.readyState === 'complete') {
      console.log('O conteúdo do iframe foi completamente carregado.');
    }
  }


  emitEvent(id: number) {
    this.completedCourse.emit(id)
  }
}
