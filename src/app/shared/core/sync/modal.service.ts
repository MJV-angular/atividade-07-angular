import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Modal } from '../../interfaces/modal.interfaces';
@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private state$ = new BehaviorSubject<Modal>({
    isOpen: false,
    text: '',
    type: 'sucess',
  });

  getState(): Observable<Modal> {
    return this.state$.asObservable();
  }


  hide() {
    const state = this.state$.getValue();
    return this.state$.next({
      ...state,
      isOpen: false,
    });
  }
  show(text: string, type: 'sucess' | 'error') {
    const state = this.state$.getValue();
    return this.state$.next({
      text: text,
      type: type,
      isOpen: true,
    });
  }
}
