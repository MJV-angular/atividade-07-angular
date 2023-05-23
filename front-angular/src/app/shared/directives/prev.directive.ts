import { Directive , ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appPrev]'
})
export class PrevDirective {

  constructor(private ele: ElementRef) {}

  @HostListener('click')
  prevfunction(){
    const slide = this.ele.nativeElement.parentElement.parentElement.children[1]
    const item = slide.children[0].children[0];
    slide.scrollTo({
      top: 100,
      left:  slide.scrollLeft - item.clientWidth,
      behavior: "smooth",
    });
  }

}
