import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiCoursesFacadeService } from 'src/app/shared/core/facade/api-courses.facade.service';

import { forkJoin, map, switchMap, take } from 'rxjs';

import { MergedCourseContentAndCourseContentUser } from 'src/app/shared/interfaces/course-content.interface';

import { CourseDetailsFacadeService } from 'src/app/shared/core/facade/course-details-facade.service';
import { Subscription } from 'rxjs';

@Component({
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss'],
})
export class CourseDetailComponent implements OnInit, OnDestroy {
  courseState?: MergedCourseContentAndCourseContentUser | null[];
  courseContent = this.courseDetailsFacade.getCourseContentBySelect$;
  teste = this.courseDetailsFacade.getCoursesContentUser$;

  private activatedRouteSubscription!: Subscription;
  private firstCourseContentSubscription!: Subscription;
  private coursesContentUserSubscription!: Subscription;
  private courseContentBySelectSubscription!: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private coursesFacade: ApiCoursesFacadeService,
    private courseDetailsFacade: CourseDetailsFacadeService
  ) {}

  ngOnDestroy(): void {
    this.activatedRouteSubscription.unsubscribe();
    this.firstCourseContentSubscription.unsubscribe();
    this.coursesContentUserSubscription.unsubscribe();
    this.courseContentBySelectSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.activatedRouteSubscription = this.activatedRoute.params
      .pipe(
        map((params) => params.id),
        switchMap((courseId) => this.coursesFacade.getCourseById(courseId))
      )
      .subscribe();

    this.firstCourseContentSubscription =
      this.courseDetailsFacade.firstCourseContent$.subscribe();
    this.coursesContentUserSubscription =
      this.courseDetailsFacade.getCoursesContentUser$.subscribe();
    this.courseContentBySelectSubscription =
      this.courseDetailsFacade.getCourseContentBySelect$.subscribe();
  }

  onSelectCourseContent(id: number) {
    this.courseDetailsFacade.getCourseContentbyId(id).subscribe();
  }

  onCompletedCourse(id: number) {
    this.courseDetailsFacade.completedCourseContentUser(id).subscribe();
  }
}
