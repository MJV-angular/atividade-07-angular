import { Component, OnInit } from '@angular/core';
import { DataHomeService } from 'src/app/shared/services/data-home.service';
import { DataHome } from 'src/app/shared/interfaces/home.interfaces';
import { Text } from 'src/app/shared/interfaces/home.interfaces';
@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  schools?: string[];
  texts?: Text[];
  constructor(private dataHome: DataHomeService) {}
  ngOnInit() {
    this.schools = this.dataHome.getData().schools;
    this.texts = this.dataHome.getData().homeText;
  }
}
