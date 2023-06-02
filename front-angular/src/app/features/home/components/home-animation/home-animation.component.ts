import { Component, ElementRef, ViewChild } from '@angular/core';
import { DataHomeService } from 'src/app/shared/core/sync/data-home.service';
import { DataHome } from 'src/app/shared/interfaces/home.interfaces';
import { gsap } from 'gsap';
@Component({
  selector: 'app-home-animation',
  templateUrl: './home-animation.component.html',
  styleUrls: ['./home-animation.component.scss'],
})
export class HomeAnimationComponent {
  data: DataHome;
  @ViewChild('text', { static: true })
  text!: ElementRef;
  @ViewChild('animation', { static: true })
  animation!: ElementRef;
  constructor(private dataHome: DataHomeService) {
    this.data = dataHome.getData();
  }

  ngAfterContentInit() {
    gsap.fromTo(
      this.animation.nativeElement,
      {
        y: 500,
        x: 100,
        opacity: 0
      },
      {
        y: 0,
        x: 0,
        opacity:1,
        duration: 1,
      }
    );
    gsap.fromTo(
      this.text.nativeElement,
      { opacity: 0, y: -100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
      }
    )
    }

}
