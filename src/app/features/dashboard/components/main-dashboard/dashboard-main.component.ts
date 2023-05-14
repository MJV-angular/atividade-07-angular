import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiCoursesFacadeService } from 'src/app/shared/core/facade/api-courses.facade.service';
import { ApiUserFacadeService } from 'src/app/shared/core/facade/api-user.facade.service';
import { IcourseResponse } from 'src/app/shared/interfaces/courses.interfaces';
import { IUserState } from 'src/app/shared/interfaces/user.interfaces';
import { PerfilModalService } from 'src/app/shared/core/sync/perfil-modal.service';
import { CourseContentFacadeService } from 'src/app/shared/core/facade/course-content.facade.service';
import { BehaviorSubject, Observable, Subscription, switchMap } from 'rxjs';
import { ICourseContent } from 'src/app/shared/interfaces/course-content.interface';

@Component({
  selector: 'app-dashboard-main',
  templateUrl: './dashboard-main.component.html',
  styleUrls: ['./dashboard-main.component.scss'],
})
export class DashboardMainComponent implements OnInit, OnDestroy {
  user$ = this.userFacade.getUser$;
  mycourses$ = this.userFacade.getCoursesByUser$;
  subscription?: Subscription;
  filterCoursesContent$ = this.courseContentFacade.getCoursesfilter$;

  constructor(
    public modalService: PerfilModalService,
    public userFacade: ApiUserFacadeService,
    public coursesFacade: ApiCoursesFacadeService,
    private courseContentFacade: CourseContentFacadeService
  ) {}

  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.courseContentFacade
      .getCourseContent()
      .pipe(
        switchMap(() => this.courseContentFacade.getCoursesfilterInitial$),
      )
      .subscribe();
  }

  showModal() {
    this.modalService.show();
  }

  course() {
    console.log("página de cursos")
  }
}
