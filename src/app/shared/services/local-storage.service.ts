import { Injectable } from '@angular/core';
import { Observable, Subject , of, tap} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private _refresh$= new Subject<void>();

  get refresh$() {
    return this._refresh$;
  }

  get(item: string) {
    const localStorage$ = of(localStorage.getItem(item))
    return localStorage$.pipe(tap(
      () => {
        this._refresh$.next()
      }
    ));

  }
  set(item: string, value: any) {
    const data = JSON.stringify(value)
    const localStorage$ = of(localStorage.setItem(item, data))
    return localStorage$.pipe(tap(
      () => {
        this._refresh$.next(value)
      }
    ));
  }
}
