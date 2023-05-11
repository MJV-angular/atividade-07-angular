import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IcourseResponse } from 'src/app/shared/interfaces/courses.interfaces';
import { IUserState } from 'src/app/shared/interfaces/user.interfaces';
import { PerfilModalService } from '../../core/sync/perfil-modal.service';
import { ApiUserFacadeService } from '../../core/facade/api-user.facade.service';
import { ApiCoursesFacadeService } from '../../core/facade/api-courses.facade.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})


export class SidebarComponent {
  @Input() user : IUserState | undefined;
  @Input() courses : IcourseResponse[] | undefined
  @Output() openModal = new EventEmitter();

  open() {
    this.openModal.emit();
  }

  constructor(public modalService: PerfilModalService, public userFacade: ApiUserFacadeService, public coursesFacade: ApiCoursesFacadeService) {
  }

  ngOnInit(): void {
  }


}
