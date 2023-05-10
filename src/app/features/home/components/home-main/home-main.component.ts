import { Component, OnInit } from '@angular/core';
import { DataHomeService } from 'src/app/shared/core/sync/data-home.service';
import { Text } from 'src/app/shared/interfaces/home.interfaces';

@Component({
  selector: 'app-home-main',
  templateUrl: './home-main.component.html',
  styleUrls: ['./home-main.component.scss']
})

export class HomeMainComponent {
  schools?: string[];
  texts?: Text[];
  constructor(private dataHome: DataHomeService) { }
  ngOnInit() {
    this.schools = this.dataHome.getData().schools;
    this.texts = this.dataHome.getData().homeText;
  }
}
