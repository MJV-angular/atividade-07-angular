import { Component, OnInit } from '@angular/core';
import { UserResponse } from '../../interfaces/api.interfaces';
import { ApiSessionService } from '../../core/async/api-session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  user?: UserResponse
  constructor(private apiService: ApiSessionService, private route: Router) { }

  ngOnInit(): void {
    const userSession = localStorage.getItem('@USER');
    if (userSession) {
      this.user = JSON.parse(userSession)
    }
  }

  logout() {
    this.apiService.logout()
    this.route.navigate(['/home'])
  }

}
