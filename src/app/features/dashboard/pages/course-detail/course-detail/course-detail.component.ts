import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { map, switchMap, take, tap } from 'rxjs';

import { Subscription } from 'rxjs';
import { DashboardFacadeService } from 'src/app/shared/core/facade/dashboard-facade.service';

@Component({
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss'],
})
export class CourseDetailComponent implements OnInit, OnDestroy {
  courseContentSelect = this.dashboardFacade.getCourseSelected;
  completedCourseSubscription: Subscription = new Subscription();
  selectedSubscription: Subscription = new Subscription();
  activatedRouteSubscription: Subscription = new Subscription();
  coursesContentUser = this.dashboardFacade.getCoursesContentbyCoursesId$;

  constructor(
    private activatedRoute: ActivatedRoute,
    private dashboardFacade: DashboardFacadeService
  ) {}

  ngOnInit(): void {
    this.activatedRouteSubscription = this.activatedRoute.params
      .pipe(
        map((params) => params.id),
        switchMap((courseId) =>
          this.dashboardFacade.getCourseContentsUserByCourseId(courseId).pipe()
        )
      )
      .subscribe();
  }

  onSelectCourseContent(id: number) {
    this.selectedSubscription = this.dashboardFacade
      .selectCourseContentUser(id)
      .subscribe();
  }

  onCompletedCourse(id: number) {
    this.completedCourseSubscription = this.dashboardFacade
      .completedCourseContentUser(id)
      .subscribe();
  }

  ngOnDestroy(): void {
    this.activatedRouteSubscription.unsubscribe();
    this.completedCourseSubscription.unsubscribe();
    this.selectedSubscription.unsubscribe();
  }
}
