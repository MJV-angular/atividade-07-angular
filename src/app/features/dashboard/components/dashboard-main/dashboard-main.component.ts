import { Component, OnInit } from '@angular/core';
import { ApiCoursesFacadeService } from 'src/app/shared/core/facade/api-courses.facade.service';
import { ApiUserFacadeService } from 'src/app/shared/core/facade/api-user.facade.service';
import { IcourseResponse } from 'src/app/shared/interfaces/courses.interfaces';
import { IUserState } from 'src/app/shared/interfaces/user.interfaces';
import { PerfilModalService } from 'src/app/shared/core/sync/perfil-modal.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dashboard-main',
  templateUrl: './dashboard-main.component.html',
  styleUrls: ['./dashboard-main.component.scss']
})
export class DashboardMainComponent implements OnInit {
  user?: IUserState;
  user$ = this.userFacade.getUser$;
  mycourses$ = this.userFacade.getCoursesByUser$;
  mycourses?: IcourseResponse[];

  constructor(public modalService: PerfilModalService, public userFacade: ApiUserFacadeService, public coursesFacade: ApiCoursesFacadeService) {

  }

 

  ngOnInit(): void {
    this.user$.subscribe(value => this.user = value)
    this.mycourses$.subscribe(value => this.mycourses = value)
  }

  showModal() {
    this.modalService.show()
  }



}
