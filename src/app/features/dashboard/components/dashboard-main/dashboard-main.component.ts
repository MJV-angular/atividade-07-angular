import { Component, OnInit} from '@angular/core';
import { ApiCoursesFacadeService } from 'src/app/shared/core/facade/api-courses.facade.service';
import { ApiUserFacadeService } from 'src/app/shared/core/facade/api-user.facade.service';
import { LocalStorageService } from 'src/app/shared/core/sync/local-storage.service';
import { IcourseResponse } from 'src/app/shared/interfaces/courses.interfaces';
import { IUserState } from 'src/app/shared/interfaces/user.interfaces';
import { PerfilModalService } from 'src/app/shared/services/perfil-modal.service';

@Component({
  selector: 'app-dashboard-main',
  templateUrl: './dashboard-main.component.html',
  styleUrls: ['./dashboard-main.component.scss']
})
export class DashboardMainComponent implements OnInit {
  user?: IUserState;
  user$ = this.userFacade.getUser$;
  mycourses$ = this.userFacade.getCoursesByUser$
  mycourses: IcourseResponse[] | undefined
  constructor(public modalService: PerfilModalService, public userFacade: ApiUserFacadeService, public coursesFacade: ApiCoursesFacadeService) {
  }


  ngOnInit(): void {
    this.coursesFacade.getCourses().subscribe(value => console.log(value))
    this.user$.subscribe(value => this.user = value)
    this.mycourses$.subscribe( value =>  this.mycourses = value )
  }

  showModal(){
    this.modalService.show()
  }

}
