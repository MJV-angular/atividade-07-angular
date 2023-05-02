import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  ViewContainerRef,

} from '@angular/core';
import { PopupComponent } from '../popup/popup.component';
import { ModalService } from '../../services/modal.service';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements AfterViewInit {
  @ViewChild('body', { read: ViewContainerRef }) body!: ViewContainerRef
  @Input() title: string = '';
  @Output() cancelEvent = new EventEmitter();
  @Output() confirmEvent = new EventEmitter();

  constructor(public modalService: ModalService) { }
  ngAfterViewInit(): void {
  }

  ngAfterViewChecked(): void {
    if(this.body) {
      this.body.createComponent(PopupComponent)
    }
  }
}
