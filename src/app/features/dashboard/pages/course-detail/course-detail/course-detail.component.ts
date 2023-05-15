import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiCoursesFacadeService } from 'src/app/shared/core/facade/api-courses.facade.service';
import { IcourseResponse } from '../../../../../shared/interfaces/courses.interfaces'
import { forkJoin, map, switchMap, take } from 'rxjs';
import { CourseContentFacadeService } from 'src/app/shared/core/facade/course-content.facade.service';
import { ICourseContent } from 'src/app/shared/interfaces/course-content.interface';
import { ApiUserFacadeService } from 'src/app/shared/core/facade/api-user.facade.service';
@Component({
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss']
})
export class CourseDetailComponent implements OnInit {
  courseState?: ICourseContent[];
  courseContentInit: number = 0;

  constructor(private activatedRoute: ActivatedRoute,
    private coursesFacade: ApiCoursesFacadeService, private courseContentFacade: CourseContentFacadeService, private userFacade: ApiUserFacadeService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      map(params => params.id),
      switchMap((courseId) => this.coursesFacade.getCourseById(courseId))
    ).subscribe(courseState => this.courseState = courseState.courseContent)

    this.userFacade.getUser$.subscribe(
      value => console.log(value)
    )
  }



}
