import { Component } from '@angular/core';
import { DataHomeService } from 'src/app/shared/core/sync/data-home.service';
import { DataHome } from 'src/app/shared/interfaces/home.interfaces';
@Component({
  selector: 'app-home-animation',
  templateUrl: './home-animation.component.html',
  styleUrls: ['./home-animation.component.scss'],
})
export class HomeAnimationComponent {
  data: DataHome;
  constructor(private dataHome: DataHomeService) {
    this.data = dataHome.getData();
  }
}
