import { Component } from '@angular/core';
import { UserResponse } from 'src/app/shared/interfaces/api.interfaces';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent {
  user?: UserResponse
  ngOnInit(): void {
    const userSession = localStorage.getItem('@USER');
    if(userSession){
      this.user = JSON.parse(userSession)
    }
  }
}
