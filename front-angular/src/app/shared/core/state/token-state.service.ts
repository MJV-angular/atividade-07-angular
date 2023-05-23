import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TokenStateService {
  tokenState = {
    token: localStorage.getItem('@TOKEN'),
  };

  private state$ = new BehaviorSubject<{ token: string | null }>(
    this.tokenState
  );

  getState(): Observable<{ token: string | null }> {
    return this.state$.asObservable();
  }

  setToken(token: string) {
    this.state$.next({
      token: token,
    });
  }

  cleanToken() {
    this.state$.next({
      token: null,
    });
  }
}
