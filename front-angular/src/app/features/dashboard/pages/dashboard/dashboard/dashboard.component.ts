import { UserFacadeService } from 'src/app/shared/core/facade/user-facade.service';
import { PerfilModalService } from 'src/app/shared/core/sync/perfil-modal.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { CourseContentFacadeService } from 'src/app/shared/core/facade/course-content.facade.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  user$ = this.userFacade.getUser$;
  coursesUser$ = this.userFacade.getCoursesUser$;
  private subscriptionCourses$: Subscription = new Subscription()
  private subscriptionUser$: Subscription = new Subscription()
  filterCoursesContent$ = this.courseContentFacade.getCoursesfilter$;

  constructor(
    public modalService: PerfilModalService,
    public userFacade: UserFacadeService,
    private courseContentFacade: CourseContentFacadeService
  ) {}

  ngOnDestroy(): void {
    this.subscriptionCourses$.unsubscribe();
    this.subscriptionUser$.unsubscribe();
  }

  ngOnInit(): void {
    this.subscriptionUser$ = this.userFacade.getUser$.subscribe()
    this.subscriptionCourses$ = this.courseContentFacade.getCoursesfilterInitial$.subscribe();
  }

  showModal() {
    this.modalService.show();
  }
}
