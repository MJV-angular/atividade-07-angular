import { Component, OnInit} from '@angular/core';
import { ApiCoursesFacadeService } from 'src/app/shared/core/facade/api-courses.facade.service';
import { IcourseState, IcourseResponse } from 'src/app/shared/interfaces/courses.interfaces';


@Component({
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})

export class CatalogComponent implements OnInit {
  courses: IcourseResponse[] = [];

  constructor(public courseFacade: ApiCoursesFacadeService){
  }

  ngOnInit(): void {
    this.courseFacade.getcourses$.subscribe(value => this.courses = value.courses)
  }

}
