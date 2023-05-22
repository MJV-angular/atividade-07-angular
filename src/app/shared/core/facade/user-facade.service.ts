import { CourseUser } from '../../interfaces/register-courses.interfaces';
import { Injectable } from '@angular/core';
import { ApiUserService } from '../async/api-user.service';
import { UserStateService } from '../state/user-state.service';
import { IUser, UserRequest } from '../../interfaces/user.interfaces';
import { Observable, distinctUntilChanged, map, shareReplay, tap } from 'rxjs';
import { ToastService } from '../sync/toast.service';

@Injectable({
  providedIn: 'root',
})
export class UserFacadeService {
  constructor(
    private apiServices: ApiUserService,
    private userState: UserStateService,
    private toast: ToastService
  ) {}

  setRegisterCourses(courses: CourseUser[]) {
    return this.userState.addCourses(courses);
  }

  readonly getCoursesUser$ = this.userState.getState().pipe(
    map((state) => state.courses),
    distinctUntilChanged(),
    shareReplay(1)
  );

  readonly getCoursesContentUser$ = this.userState.getState().pipe(
    map((state) => state.coursesContentUser),
    distinctUntilChanged(),
    shareReplay(1)
  );

  readonly getUser$ = this.userState
    .getState()
    .pipe(distinctUntilChanged(), shareReplay(1));

  readonly updatedLocalStorage$ = this.userState.getState().pipe(
    map((state) => localStorage.setItem('@USER', JSON.stringify(state))),
    distinctUntilChanged(),
    shareReplay(1)
  );

  setUserWithlocalHost() {
    let user = localStorage.getItem('@USER');
    if (user) {
      const data = JSON.parse(user);
      this.userState.setUser(data);
    }
  }

  updatedUser(user: Partial<UserRequest>, id: number): Observable<IUser> {
    return this.apiServices.updatedUser(user, id).pipe(
      tap((response) => {
        this.userState.editeUser(response);
      }),
      tap(() => {
        this.toast.show('Usuário atualizado com sucesso.', "sucess");
      })
    );
  }
}
