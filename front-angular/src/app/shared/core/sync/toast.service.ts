import { Injectable, Type } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Itoast } from '../../interfaces/toast.interfaces';
@Injectable({
  providedIn: 'root',
})
export class ToastService {
  timeoutID!: any;
  constructor() {}

  private toastSubject = new BehaviorSubject<Itoast>({
    hide: false,
    message: '',
    type: 'success',
  });

  toastSubject$: Observable<Itoast> = this.toastSubject.asObservable();

  hide() {
    this.toastSubject.next({
      ...this.toastSubject.getValue(),
      hide: false,
    });
  }

  show(message: string, type: 'success' | 'error') {
    const time = 5000;

    clearTimeout(this.timeoutID);

    this.toastSubject.next({
      ...this.toastSubject.getValue(),
      message: message,
      hide: true,
      type: type,
    });

    this.timeoutID = setTimeout(() => {
      this.hide();
    }, time);
  }
}
