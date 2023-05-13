import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'thumb'
})
export class ThumbPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    let valid = value.split('watch?v=')[1].substring(0, 11)
    const imageThumb = `https://img.youtube.com/vi/${valid}/hqdefault.jpg`
    return imageThumb
  }

}
