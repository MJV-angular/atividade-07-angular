import { Component, OnInit } from '@angular/core';
import { ICatalog } from 'src/app/shared/interfaces/catalog.interfaces';
import { CatalogFacadeService } from 'src/app/shared/core/facade/catalog-facade.service';
import { ApiRegisterCourseFacadeService } from 'src/app/shared/core/facade/api-register-course.facade.service';
import { ApiUserFacadeService } from 'src/app/shared/core/facade/api-user.facade.service';
import { ApiCoursesFacadeService } from 'src/app/shared/core/facade/api-courses.facade.service';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-catalog-main',
  templateUrl: './catalog-main.component.html',
  styleUrls: ['./catalog-main.component.scss']
})


export class CatalogMainComponent implements OnInit {
  class?: string;
  user$ = this.apiUserFacade.getUser$
  cursesRegistred?: number[];
  catalog?: ICatalog;

  constructor(private caltalogFacade: CatalogFacadeService, private apiRegisterCourseFacade: ApiRegisterCourseFacadeService, private apiUserFacade: ApiUserFacadeService, private router: Router, private coursesFacade: ApiCoursesFacadeService) { }

  ngOnInit(): void {
    this.coursesFacade.getCourses().pipe(
      switchMap(() => this.caltalogFacade.getCatalog()),
      switchMap(() => this.caltalogFacade.loadCatalog())
    ).subscribe(value => this.catalog = value);
  }

  onClick(id: number) {
    this.user$.subscribe(value => {
      if (!value.courses!.map(ele => ele.courseId).includes(id)) {
        this.caltalogFacade.selectCatalog(id)
      }
    })
  }

  onSubmit() {
    this.apiRegisterCourseFacade.addRegisterCourse({ courseId: this.catalog!.selects }).subscribe(
      {
        complete: () => this.router.navigateByUrl('/dashboard')
      }
    )
  }
}

