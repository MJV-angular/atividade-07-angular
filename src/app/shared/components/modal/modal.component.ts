import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  ViewContainerRef,

} from '@angular/core';

import { ModalService } from '../../services/modal.service';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @ViewChild('body', { read: ViewContainerRef }) body!: ViewContainerRef
  @Input() title: string = '';
  @Output() cancelEvent = new EventEmitter();
  @Output() confirmEvent = new EventEmitter();
  constructor(public modalService: ModalService) { }
}
