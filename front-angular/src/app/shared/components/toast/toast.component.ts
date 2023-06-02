import {
  AfterContentInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  AfterViewChecked,
  AfterViewInit,
} from '@angular/core';
import { ToastService } from '../../core/sync/toast.service';
import { map, Observable, tap } from 'rxjs';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
import { gsap } from 'gsap';
@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
})
export class ToastComponent implements AfterViewInit {
  content!: string;
  isOpen: boolean = false;

  constructor(public toast: ToastService) {}
  @ViewChild('toast', { static: true })
  toastAnimation!: ElementRef;

  ngAfterViewInit(): void {
    this.toast.toastSubject$
      .pipe(tap((value) => (this.content = value.message)))
      .subscribe((value) => {
        this.isOpen = value.hide;
        this.startAnimation()
      });
  }

  startAnimation() {
    gsap.fromTo(
      this.toastAnimation.nativeElement!,
      {
        opacity: 0,
        x: -400,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.5,
      }
    );
  }

  options: AnimationOptions = {
    path: 'https://assets9.lottiefiles.com/packages/lf20_afs4kbqm.json',
    loop: false,
    autoplay: true,
  };

  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }
}
