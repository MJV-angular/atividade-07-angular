import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IcourseResponse } from 'src/app/shared/interfaces/courses.interfaces';
import { IRegisterCourseResponse } from 'src/app/shared/interfaces/register-courses.interfaces';
import { IUserState } from 'src/app/shared/interfaces/user.interfaces';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent {

  @Input() user?: IUserState;
  @Output() clicked = new EventEmitter();
  @Input() _mycourse?: IcourseResponse[]
  @Input() courses?: IcourseResponse[]
  onSubmit() {
    this.clicked.emit();
  }
}

