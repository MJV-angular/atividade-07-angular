import { Component, OnInit } from '@angular/core';
import { ICatalog } from 'src/app/shared/interfaces/catalog.interfaces';
import { CatalogFacadeService } from 'src/app/shared/core/facade/catalog-facade.service';
import { ApiRegisterCourseFacadeService } from 'src/app/shared/core/facade/api-register-course.facade.service';
import { ApiUserFacadeService } from 'src/app/shared/core/facade/api-user.facade.service';
import { IcourseState } from 'src/app/shared/interfaces/courses.interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalog-main',
  templateUrl: './catalog-main.component.html',
  styleUrls: ['./catalog-main.component.scss']
})


export class CatalogMainComponent implements OnInit {
  class?: string;
  catalog?: ICatalog;
  user$ = this.apiUserFacade.getUser$
  cursesRegistred?: number[];

  constructor(private caltalogFacade: CatalogFacadeService, private apiRegisterCourseFacade: ApiRegisterCourseFacadeService, private apiUserFacade: ApiUserFacadeService, private router: Router) {}

  ngOnInit(): void {
    this.caltalogFacade.getCatalog().subscribe();
    this.caltalogFacade.loadCatalog().subscribe(value => this.catalog = value)
    this.user$.subscribe(value => this.cursesRegistred = value.courses?.map(ele => ele.courseId))
  }

  onClick(id: number) {
    this.user$.subscribe(value => {
      if(!value.courses!.map(ele => ele.courseId).includes(id)){
        this.caltalogFacade.selectCatalog(id)
      }
    })
  }

  onSubmit() {
    if (this.catalog) {
      this.apiRegisterCourseFacade.addRegisterCourse({ courseId: this.catalog.selects }).subscribe(
        {
          complete: () => this.router.navigateByUrl('/dashboard')

        }
      )
    }
  }
}
