import { Component, Input, OnInit } from '@angular/core';
import { IcourseState } from 'src/app/shared/core/types/course-state.types';
import { CatalogFacadeService } from 'src/app/shared/core/facade/catalog-facade.service';
@Component({
  selector: 'app-catalog-main',
  templateUrl: './catalog-main.component.html',
  styleUrls: ['./catalog-main.component.scss']
})


export class CatalogMainComponent implements OnInit{
  class?: string;
  catalog: any;
  constructor(private caltalogFacade: CatalogFacadeService) {
  }

  ngOnInit(): void {
    this.caltalogFacade.getCatalog().subscribe();
    this.caltalogFacade.loadCatalog().subscribe(value => this.catalog = value)
  }

  onClick(course: IcourseState) {
    this.caltalogFacade.selectCatalog(course)
  }

  onSubmit(){
    
  }
}
