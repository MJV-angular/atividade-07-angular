import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Pipe({
  name: 'embed',
})
export class EmbedPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(value: SafeUrl, ...args: unknown[]): SafeUrl {
    const string = value.toString();
    const valid = string.split('watch?v=')[1].substring(0, 11);
    const video = `https://www.youtube.com/embed/${valid}?version=3&enablejsapi=1`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(video);
  }
}
