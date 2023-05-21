import { Component, OnInit } from '@angular/core';
import { IUser } from '../../interfaces/user.interfaces';
import { LogoutFacadeService } from '../../core/facade/logout-facade.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  user?: IUser;
  constructor(private logout: LogoutFacadeService) {}

  ngOnInit(): void {
    const userSession = localStorage.getItem('@USER');
    if (userSession) {
      this.user = JSON.parse(userSession);
    }
  }

  onLogout(){
    this.logout.logout()
  }
}
