import { Component, OnInit } from '@angular/core';
import { ICatalog } from 'src/app/shared/interfaces/catalog.interfaces';
import { CatalogFacadeService } from 'src/app/shared/core/facade/catalog-facade.service';
import { ApiRegisterCourseFacadeService } from 'src/app/shared/core/facade/api-register-course.facade.service';
import { ApiUserFacadeService } from 'src/app/shared/core/facade/api-user.facade.service';
import { ApiCoursesFacadeService } from 'src/app/shared/core/facade/api-courses.facade.service';
import { Router } from '@angular/router';
import { Observable, map, switchMap, tap } from 'rxjs';
import { IUserState } from 'src/app/shared/interfaces/user.interfaces';

@Component({
  selector: 'app-catalog-main',
  templateUrl: './catalog-main.component.html',
  styleUrls: ['./catalog-main.component.scss']
})

export class CatalogMainComponent implements OnInit {
  class?: string;
  catalog!: ICatalog;
  userCourses?: number[];


  constructor(private catalogFacade: CatalogFacadeService, private apiRegisterCourseFacade: ApiRegisterCourseFacadeService, private userFacade: ApiUserFacadeService, private router: Router, private coursesFacade: ApiCoursesFacadeService) { }

  ngOnInit(): void {
    this.coursesFacade.getCourses().pipe(
      switchMap(() => this.catalogFacade.getCatalog$),
      tap(catalog => this.catalog = catalog),
      switchMap(() => this.userFacade.getUser$),
      map(({courses}) => courses.map(({courseId}) => courseId)),
      tap(courses => this.userCourses = courses)
    ).subscribe();
  }

  onClick(id: number) {
    this.selectId(id)

  }

  selectId(id: number) {
    this.catalogFacade.selectCatalog(id)
  }

  onSubmit() {
    this.apiRegisterCourseFacade.addRegisterCourse({ courseId: this.catalog.selects }).subscribe(
      {
        complete: () => this.router.navigateByUrl('/dashboard')
      }
    )
  }
}

