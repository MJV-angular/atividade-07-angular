import { Directive , ElementRef, HostListener} from '@angular/core';
@Directive({
  selector: '[appNext]'
})
export class NextDirective {

  constructor(private ele: ElementRef) { }
  @HostListener('click')
  nextfunction(){
    const slide = this.ele.nativeElement.parentElement.parentElement.children[1]
    const item = slide.children[0].children[0];
    slide.scrollTo({
      top: 100,
      left: item.clientWidth + slide.scrollLeft,
      behavior: "smooth",
    });
  }
}
