import { Component, OnInit } from '@angular/core';
import { IUser } from '../../interfaces/user.interfaces';
import { LogoutFacadeService } from '../../core/facade/logout-facade.service';
import { TokenFacadeService } from '../../core/facade/token-facade.service';
import { UserFacadeService } from '../../core/facade/user-facade.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  constructor(private logout: LogoutFacadeService, private userFacade: UserFacadeService) {}
  user = this.userFacade.getUser$
  onLogout(){
    this.logout.logout()
  }
}
