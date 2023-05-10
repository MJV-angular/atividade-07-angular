import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PerfilModalService {
  constructor() { }
  private OpenSubject = new BehaviorSubject<boolean>(false);

  isOpen$: Observable<boolean> = this.OpenSubject.asObservable();
  hide() {
    this.OpenSubject.next(false)
  }
  show() {
    this.OpenSubject.next(true)
  }
}
