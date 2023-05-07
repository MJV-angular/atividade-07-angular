import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { UserResponse } from 'src/app/shared/interfaces/api.interfaces';
import { PerfilModalService } from 'src/app/shared/services/perfil-modal.service';
import { LocalStorageService } from 'src/app/shared/core/sync/local-storage.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {
  user?: UserResponse;
  constructor(public modalService: PerfilModalService, public _localStorage: LocalStorageService) {

  }

  ngOnInit(): void {
    this.getUser('@USER');
    this._localStorage.refresh$.subscribe(
      {
        next: (value) => {
          this.user = value!
        }
      }
    )
  }

  getUser(value: string) {
    return this._localStorage.get(value).subscribe(value => { this.user = JSON.parse(value!) })
  }
  ngOnDestroy() {
    this._localStorage.refresh$.unsubscribe
  }
}

