import { Injectable } from '@angular/core';
import { LoginFacadeService } from './login-facade.service';
import { TokenStateService } from '../state/token-state.service';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class TokenFacadeService {
  constructor(private tokenState: TokenStateService) {}

  readonly getToken = this.tokenState
    .getState()
    .pipe(map((value) => value.token));
  setToken(token: string) {
    this.tokenState.setToken(token);
  }

  cleanToken() {
    this.tokenState.cleanToken();
  }
}
