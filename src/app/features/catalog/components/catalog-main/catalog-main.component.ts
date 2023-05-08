import { Component, OnInit } from '@angular/core';
import { ICatalog } from 'src/app/shared/interfaces/catalog.interfaces';
import { CatalogFacadeService } from 'src/app/shared/core/facade/catalog-facade.service';
import { ApiRegisterCourseFacadeService } from 'src/app/shared/core/facade/api-register-course.facade.service';
import { ApiUserFacadeService } from 'src/app/shared/core/facade/api-user.facade.service';
import { UserResponse } from 'src/app/shared/interfaces/api.interfaces';

@Component({
  selector: 'app-catalog-main',
  templateUrl: './catalog-main.component.html',
  styleUrls: ['./catalog-main.component.scss']
})


export class CatalogMainComponent implements OnInit {
  class?: string;
  catalog?: ICatalog;
  courseRegistred? : any
  constructor(private caltalogFacade: CatalogFacadeService, private apiRegisterCourseFacade: ApiRegisterCourseFacadeService, private apiUserFacade: ApiUserFacadeService) {
  }

  ngOnInit(): void {
    this.caltalogFacade.getCatalog().subscribe();
    this.caltalogFacade.loadCatalog().subscribe(value => this.catalog = value)
    this.apiUserFacade.userCourses$.subscribe(value => this.courseRegistred = value)
  }


  onClick(id: number) {
    this.caltalogFacade.selectCatalog(id)
  }

  onSubmit() {
    if (this.catalog) {
      this.apiRegisterCourseFacade.addRegisterCourse({courseId: this.catalog.selects})
    }

  }
}
