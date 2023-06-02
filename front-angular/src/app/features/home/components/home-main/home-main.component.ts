import {
  Component,
  ElementRef,
  ViewChild,
  AfterContentInit,
} from '@angular/core';
import { DataHomeService } from 'src/app/shared/core/sync/data-home.service';
import { Text } from 'src/app/shared/interfaces/home.interfaces';
import { gsap } from 'gsap';

@Component({
  selector: 'app-home-main',
  templateUrl: './home-main.component.html',
  styleUrls: ['./home-main.component.scss'],
})
export class HomeMainComponent implements AfterContentInit {
  schools?: string[];
  texts?: Text[];
  @ViewChild('text', { static: true })
  text!: ElementRef;
  @ViewChild('box', { static: true })
  box!: ElementRef;
  constructor(private dataHome: DataHomeService) {}

  ngOnInit() {
    this.schools = this.dataHome.getData().schools;
    this.texts = this.dataHome.getData().homeText;
  }

  ngAfterContentInit() {
    gsap.fromTo(
      this.box.nativeElement,
      {
        y: 500,
      },
      {
        y: 0,
        duration: 1,
      }
    );
    gsap.fromTo(
      this.text.nativeElement,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1.5,
      }
    );
  }
}
