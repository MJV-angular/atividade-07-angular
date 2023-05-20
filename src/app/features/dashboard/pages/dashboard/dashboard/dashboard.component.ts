import { UserFacadeService } from 'src/app/shared/core/facade/user-facade.service';
import { PerfilModalService } from 'src/app/shared/core/sync/perfil-modal.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { CourseContentFacadeService } from 'src/app/shared/core/facade/course-content.facade.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  user$ = this.userFacade.getUser$;
  coursesUser$ = this.userFacade.getCoursesUser$;
  subscription?: Subscription;
  filterCoursesContent$ = this.courseContentFacade.getCoursesfilter$;

  constructor(
    public modalService: PerfilModalService,
    public userFacade: UserFacadeService,
    private courseContentFacade: CourseContentFacadeService
  ) {}

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.subscription = this.courseContentFacade.getCoursesfilterInitial$.subscribe(value => console.log(value));
  }

  showModal() {
    this.modalService.show();
  }
}
