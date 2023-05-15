
import { DataDashboardService } from 'src/app/shared/core/sync/data-dashboard.service';
import { ApiUserFacadeService } from 'src/app/shared/core/facade/api-user.facade.service';
import { PerfilModalService } from 'src/app/shared/core/sync/perfil-modal.service';
import { ApiCoursesFacadeService } from 'src/app/shared/core/facade/api-courses.facade.service';
import { Component, OnInit, OnDestroy } from '@angular/core';


import { IcourseResponse } from 'src/app/shared/interfaces/courses.interfaces';
import { IUserState } from 'src/app/shared/interfaces/user.interfaces';

import { CourseContentFacadeService } from 'src/app/shared/core/facade/course-content.facade.service';
import { BehaviorSubject, Observable, Subscription, forkJoin, switchMap, take } from 'rxjs';
import { ICourseContent } from 'src/app/shared/interfaces/course-content.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  user$ = this.userFacade.getUser$;
  mycourses$ = this.userFacade.getCoursesByUser$;
  subscription?: Subscription;
  filterCoursesContent$ = this.courseContentFacade.getCoursesfilter$;

  constructor(public modalService: PerfilModalService,
    public userFacade: ApiUserFacadeService,
    public coursesFacade: ApiCoursesFacadeService,
    private courseContentFacade: CourseContentFacadeService
  ){}

  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    forkJoin([
      this.coursesFacade.getCourses$.pipe(take(1)),
      this.courseContentFacade.getCoursesfilterInitial$
    ]).subscribe();
  }

  showModal() {
    this.modalService.show();
  }

}
