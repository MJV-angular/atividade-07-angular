import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  Output,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { ModalService } from '../../core/sync/modal.service';
import { Subscription } from 'rxjs';
import { Modal } from '../../interfaces/modal.interfaces';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit, OnDestroy {
  private subscriptionModalInformations$: Subscription = new Subscription();
  modalState!: Modal;
  constructor(public modalService: ModalService) {}
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
    this.subscriptionModalInformations$ = this.modalService
      .getState()
      .subscribe(value => this.modalState = value);
  }
}
