import { Component } from '@angular/core';
import { DataHomeService } from 'src/app/shared/services/data-home.service';
import { DataHome } from 'src/app/shared/interfaces/home.interfaces';
@Component({
  selector: 'app-animation-home',
  templateUrl: './animation-home.component.html',
  styleUrls: ['./animation-home.component.scss'],
})
export class AnimationHomeComponent {
  data: DataHome;
  constructor(private dataHome: DataHomeService) {
    this.data = dataHome.getData();
  }
}
