import { Component, OnInit} from '@angular/core';
import { ApiCoursesFacadeService } from 'src/app/shared/core/facade/api-courses.facade.service';
import { IcourseResponse } from 'src/app/shared/interfaces/courses.interfaces';
import { UserResponse } from 'src/app/shared/interfaces/api.interfaces';

@Component({
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})

export class CatalogComponent implements OnInit {
  courses: IcourseResponse[] = [];
  
  constructor(public courseFacade: ApiCoursesFacadeService){
  }

  ngOnInit(): void {
    this.courseFacade.getCourses().subscribe(value => this.courses = value)
  }

}
