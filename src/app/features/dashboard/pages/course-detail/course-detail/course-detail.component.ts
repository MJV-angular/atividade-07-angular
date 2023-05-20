import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {  map, switchMap, take, tap } from 'rxjs';

import { Subscription } from 'rxjs';
import { DashboardFacadeService } from 'src/app/shared/core/facade/dashboard-facade.service';
import { CourseContentUser } from 'src/app/shared/interfaces/register-courses.interfaces';

@Component({
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss'],
})
export class CourseDetailComponent implements OnInit, OnDestroy {
  courseContentSelect = this.dashboardFacade.getCourseSelected;
  activatedRouteSubscription!: Subscription;
  coursesContentUser!: CourseContentUser[];
  constructor(
    private activatedRoute: ActivatedRoute,
    private dashboardFacade: DashboardFacadeService
  ) {}

  ngOnDestroy(): void {
    if (this.activatedRouteSubscription) {
      this.activatedRouteSubscription.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.activatedRouteSubscription = this.activatedRoute.params
      .pipe(
        map((params) => params.id),
        switchMap((courseId) =>
          this.dashboardFacade.getCourseContentsUserByCourseId(courseId).pipe()
        )
      )
      .subscribe((value) => (this.coursesContentUser = value));

  }

  onSelectCourseContent(id: number) {
    this.dashboardFacade
      .selectCourseContentUser(id)
      .subscribe();
  }

  onCompletedCourse(id: number) {
    this.dashboardFacade.completedCourseContentUser(id).subscribe()
  }
}
