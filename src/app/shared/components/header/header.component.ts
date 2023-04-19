import { Component, OnInit } from '@angular/core';
import { UserResponse } from '../../interfaces/api.interfaces';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  user?: UserResponse
  constructor(private apiService:ApiService, private route: Router){}
  ngOnInit(): void {
    const userSession = localStorage.getItem('@USER');
    if(userSession){
      this.user = JSON.parse(userSession)

    }
  }

  logout(){
    this.apiService.logout()
    this.route.navigate(['/home'])
  }

}
