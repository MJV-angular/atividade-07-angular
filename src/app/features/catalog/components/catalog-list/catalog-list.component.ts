import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { IcourseState } from 'src/app/shared/core/types/course-state.types';

@Component({
  selector: 'app-catalog-list',
  templateUrl: './catalog-list.component.html',
  styleUrls: ['./catalog-list.component.scss']
})


export class CatalogListComponent{
  @Input() courses: [] | IcourseState[]  = [];
  @Output() clicked = new EventEmitter();

  constructor(private formBuilder: FormBuilder) { }

}
