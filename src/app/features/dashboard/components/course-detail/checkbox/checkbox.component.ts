
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ICourseContent } from 'src/app/shared/interfaces/course-content.interface';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit{
  ngOnInit(): void {
    console.log(this.coursesContent, 'checkbox')
  }
  @Input() coursesContent?: ICourseContent;
  @Input() class!: string;
  @Input() checked: boolean = false;
}
