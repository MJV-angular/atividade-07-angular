import { Component } from '@angular/core';
import { UserResponse } from 'src/app/shared/interfaces/api.interfaces';
import { PerfilModalService } from 'src/app/shared/services/perfil-modal.service';
@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent {
  user?: UserResponse
  constructor(public modalService: PerfilModalService){
  }
  ngOnInit(): void {
    const userSession = localStorage.getItem('@USER');
    if(userSession){
      this.user = JSON.parse(userSession)
    }
  }
}
