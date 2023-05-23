import { Component, Input } from '@angular/core';
import { CourseContent } from '../../interfaces/register-courses.interfaces';

@Component({
  selector: 'app-card-picture-text',
  templateUrl: './card-picture-text.component.html',
  styleUrls: ['./card-picture-text.component.scss']
})
export class CardPictureTextComponent {
  @Input() course! : CourseContent;
}
