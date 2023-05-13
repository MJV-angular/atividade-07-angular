import { Component, Input } from '@angular/core';
import { ICourseContent } from '../../interfaces/course-content.interface';

@Component({
  selector: 'app-card-picture-text',
  templateUrl: './card-picture-text.component.html',
  styleUrls: ['./card-picture-text.component.scss']
})
export class CardPictureTextComponent {
  @Input() course! : ICourseContent;
}
