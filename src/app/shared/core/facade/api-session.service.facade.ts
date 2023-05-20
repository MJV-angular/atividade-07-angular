// import { Injectable } from '@angular/core';
// import { Observable, map, tap } from 'rxjs';
// import { ApiSessionService as Api } from '../async/api-session.service';
// import { IUser, IUserResponse } from '../../interfaces/user.interfaces';
// import { UserStateService } from '../state/user-state.service';
// import { IloginRequest } from '../../interfaces/user.interfaces';
// import { Router } from '@angular/router';
// import { ToastService } from '../sync/toast.service';
// import { IUserState } from '../../interfaces/user.interfaces';

// @Injectable({
//   providedIn: 'root'
// })
// export class ApiSessionFacadeService {

//   constructor(private router: Router, public api: Api, private toast: ToastService, public userState: UserStateService) { }

//   login(user: IloginRequest): Observable<IUserResponse> {
//     let pathDirect: string = "/dashboard"
//     return this.api.login(user).pipe(
//       tap({
//         next: (response: IUser) => {
//           this.userState.setUser(response);
//           window.localStorage.setItem('@TOKEN', response.token!);
//           window.localStorage.setItem('@USER', JSON.stringify(response));
//           if (response.user.courses.length == 0) {
//             pathDirect = "/catalog"
//           }
//         },
//         error: (error: any) => {
//           console.log(error.message);
//         },
//         complete: () => {
//           this.router.navigateByUrl(pathDirect);
//           if (pathDirect == "/dashboard") {
//             this.router.navigateByUrl(pathDirect)
//           }
//         }
//       })
//     )
//   }

//   updateUserInLocalStorage(user: IUserState): void {
//     localStorage.setItem('@USER', JSON.stringify(user));
//   }

//   // Define um fluxo de dados que emite objetos User
//   updateUserInLocalStorage$ = this.userState.getState().pipe(
//     tap(user => this.updateUserInLocalStorage(user))
//   ).subscribe();

// }
