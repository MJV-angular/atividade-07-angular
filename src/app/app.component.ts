import { Component, OnInit } from '@angular/core';
import { ApiUserFacadeService } from './shared/core/facade/api-user.facade.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private userFacade: ApiUserFacadeService){

  }
  ngOnInit(): void {
    this.userFacade.setUserlocalHost()
    this.userFacade.getUser$.subscribe( user => {
      localStorage.setItem('@USER', JSON.stringify(user))
      console.log(user, "app")
    }


    );
  }

  title = 'cadastro';
}
