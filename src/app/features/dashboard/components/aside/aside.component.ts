import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { UserResponse } from 'src/app/shared/interfaces/api.interfaces';
import { PerfilModalService } from 'src/app/shared/services/perfil-modal.service';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { Observable, BehaviorSubject} from 'rxjs';
import { ApiService } from 'src/app/shared/services/api.service';
@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {
  user?: UserResponse;
  constructor(public modalService: PerfilModalService, public _localStorage: LocalStorageService, private api: ApiService) {

  }

  ngOnInit(): void {
    this.getUser('@USER');
    this._localStorage.refresh$.subscribe(
      {
        next: (value) =>{
          console.log(value)
          this.user = value!
        }
      }
    )
  }

  getUser(value: string) {
    return this._localStorage.get(value).subscribe(value => {this.user = JSON.parse(value!)})
  }
  ngOnDestroy(){
    this._localStorage.refresh$.unsubscribe
  }
}
function next(value: void): void {
  throw new Error('Function not implemented.');
}

