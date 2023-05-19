import { Injectable } from '@angular/core';
import { ApiUserService } from '../async/api-user.service';
import { UserRequest } from '../../interfaces/user.interfaces';
import { tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class RegisterFacadeService {

  constructor(private apiUser: ApiUserService, private router:Router ) { }

  createUser(user: UserRequest){
    return this.apiUser.createUser(user).pipe(
      tap(() => {
        this.router.navigate(['/login']);
      })
    )
  }
}

