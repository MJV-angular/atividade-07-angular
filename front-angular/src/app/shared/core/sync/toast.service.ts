import { Injectable, Type } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Itoast } from '../../interfaces/toast.interfaces';
@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor() {}

  private toastSubject = new BehaviorSubject<Itoast>({
    hide: false,
    message: '',
    type: 'sucess',
  });

  toastSubject$: Observable<Itoast> = this.toastSubject.asObservable();

  hide() {
    this.toastSubject.next({
      ...this.toastSubject.getValue(),
      hide: false,
    });
  }
  show(message: string, type: 'sucess'| 'error') {
    this.toastSubject.next({
      ...this.toastSubject.getValue(),
      message: message,
      hide: true,
      type: type,
    });

    setTimeout(() => {
      this.hide();
    }, 5000);
  }
}
