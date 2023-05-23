import { Component, OnInit } from '@angular/core';
import { ToastService } from '../../core/sync/toast.service';
import { map , Observable} from 'rxjs';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit{
  content: string | undefined

  constructor(public toast: ToastService) { }
  $isOpen: Observable<boolean> = this.toast.toastSubject$.pipe(
    map(ele => ele.hide)
  )

  ngOnInit(): void {
    this.toast.toastSubject$.subscribe(value => this.content = value.message)
  }

}
