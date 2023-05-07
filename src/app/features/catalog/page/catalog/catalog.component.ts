import { Component, OnInit} from '@angular/core';
import { ApiCoursesFacadeService } from 'src/app/shared/core/facade/api-courses.facade.service';
import { IcourseState } from 'src/app/shared/core/types/course-state.types';
@Component({
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  courses: IcourseState[] = [];
  constructor(public courseFacade: ApiCoursesFacadeService){
  }

  ngOnInit(): void {
    this.courseFacade.getCourses().subscribe(value => this.courses = value)
  }

  onSelect(id: number){
  }
}
