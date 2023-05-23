import { Pipe, PipeTransform } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';

@Pipe({
  name: 'thumb',
})
export class ThumbPipe implements PipeTransform {
  transform(value: SafeUrl, ...args: unknown[]): string {
    let valid = value.toString().split('watch?v=')[1].substring(0, 11);
    const imageThumb = `https://img.youtube.com/vi/${valid}/hqdefault.jpg`;
    return imageThumb;
  }
}
