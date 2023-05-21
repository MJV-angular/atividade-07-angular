
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CourseContent } from 'src/app/shared/interfaces/register-courses.interfaces';


@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit{
  ngOnInit(): void {
    console.log(this.coursesContent, 'checkbox')
  }
  @Input() coursesContent?: CourseContent;
  @Input() class!: string;
  @Input() checked: boolean = false;

}
