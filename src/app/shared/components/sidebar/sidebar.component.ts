import { Component, Input, Output, EventEmitter } from '@angular/core';

import { IUserState } from 'src/app/shared/interfaces/user.interfaces';
import { PerfilModalService } from '../../core/sync/perfil-modal.service';
import { ApiUserFacadeService } from '../../core/facade/api-user.facade.service';
import { ApiCoursesFacadeService } from '../../core/facade/api-courses.facade.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseUser } from '../../interfaces/register-courses.interfaces';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})


export class SidebarComponent {
  @Input() user : IUserState | null = null;
  @Input() coursesUser: CourseUser[] | null = null
  @Output() openModal = new EventEmitter();

  onOpen() {
    this.openModal.emit();
  }

  constructor(public modalService: PerfilModalService, public userFacade: ApiUserFacadeService, public coursesFacade: ApiCoursesFacadeService, private router: Router, private activatedRouter: ActivatedRoute) {
  }

  onSelectClick(id: number){
    console.log(id)
    this.router.navigate([id],{
      relativeTo: this.activatedRouter
    })
  }


}
