import { Injectable, Type } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Itoast } from '../interfaces/toast.interfaces';
@Injectable({
  providedIn: 'root'
})

export class ToastService {

  constructor() { }

  toast = {
    hide: false,
    message: "aQUI",
    type: "sucess"
  }

  private toastSubject = new BehaviorSubject<Itoast>(this.toast);

  toastSubject$: Observable<Itoast> = this.toastSubject.asObservable();

  hide() {
    this.toastSubject.next({
      ...this.toastSubject.getValue(),
      hide: false
    })
  }
  show(message: string) {
    this.toastSubject.next(
      {
        ...this.toastSubject.getValue(),
        message: message,
        hide: true
      }
    )

    setTimeout(() => {
      this.hide()
    }, 5000);
  }
}
