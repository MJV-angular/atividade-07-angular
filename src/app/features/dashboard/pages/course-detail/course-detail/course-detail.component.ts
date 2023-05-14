import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiCoursesFacadeService } from 'src/app/shared/core/facade/api-courses.facade.service';
import {IcourseState} from '../../../../../shared/interfaces/courses.interfaces'
import { map, switchMap } from 'rxjs';
@Component({
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss']
})
export class CourseDetailComponent implements OnInit {
  courseState!: IcourseState;

  constructor(private activatedRoute: ActivatedRoute,
    private coursesFacade: ApiCoursesFacadeService){
  }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      map(params => params.id),
      switchMap((courseId) => this.coursesFacade.getCourseById(courseId))
    )
  }
}
