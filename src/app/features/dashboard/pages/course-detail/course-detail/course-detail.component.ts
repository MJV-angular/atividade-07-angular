import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiCoursesFacadeService } from 'src/app/shared/core/facade/api-courses.facade.service';
import { IcourseResponse } from '../../../../../shared/interfaces/courses.interfaces'
import { forkJoin, map, switchMap, take, tap } from 'rxjs';
import { CourseContentFacadeService } from 'src/app/shared/core/facade/course-content.facade.service';
import { ICourseContent } from 'src/app/shared/interfaces/course-content.interface';
import { ApiUserFacadeService } from 'src/app/shared/core/facade/api-user.facade.service';
import { ApiRegisterCourseFacadeService } from 'src/app/shared/core/facade/api-register-course.facade.service';
import { CourseDetailsFacadeService } from 'src/app/shared/core/facade/course-details-facade.service';
import { RangeValueAccessor } from '@angular/forms';
@Component({
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss']
})
export class CourseDetailComponent implements OnInit {
  courseState?: ICourseContent[];
  courseContentInit: number = 0;
  courseContent = this.courseDetailsFacade.getCourseContentBySelect$;


  constructor(private activatedRoute: ActivatedRoute,
    private coursesFacade: ApiCoursesFacadeService, private courseContentFacade: CourseContentFacadeService, private userFacade: ApiUserFacadeService, private registerCourseFacade: ApiRegisterCourseFacadeService, private courseDetailsFacade: CourseDetailsFacadeService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      map(params => params.id),
      switchMap((courseId) => this.coursesFacade.getCourseById(courseId)),
      tap((course) => this.courseState = course.courseContent),
    ).subscribe()

    this.courseDetailsFacade.firstCourseContent$.subscribe(value => console.log(value))
  }

  onSelectCourseContent(courseContentId: ICourseContent) {
    this.courseDetailsFacade.getCourseContentbyId(courseContentId.id).subscribe()
  }

}
