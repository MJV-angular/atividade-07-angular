import { Component, OnInit } from '@angular/core';
import { Observable, Subscription, forkJoin, switchMap } from 'rxjs';
import { CatalogFacadeService } from 'src/app/shared/core/facade/catalog-facade.service';
import { UserFacadeService } from 'src/app/shared/core/facade/user-facade.service';
import { CourseUser } from 'src/app/shared/interfaces/register-courses.interfaces';

@Component({
  selector: 'app-catalog-main',
  templateUrl: './catalog-main.component.html',
  styleUrls: ['./catalog-main.component.scss'],
})
export class CatalogMainComponent implements OnInit {
  class?: string;
  selects$!: number[];
  courses$ = this.catalogFacade.getCourses$;
  coursesUser$: CourseUser[] = [];
  subscription!: Subscription;

  constructor(
    private catalogFacade: CatalogFacadeService,
    private userFacade: UserFacadeService
  ) {}

  ngOnInit(): void {
    this.catalogFacade.getCatalogSelects$
      .pipe(
        switchMap((selects) => {
          this.selects$ = selects;
          return this.userFacade.getCoursesUser$;
        })
      )
      .subscribe((courses) => {
        this.coursesUser$ = courses;
      });
  }

  onClick(id: number) {
    this.selectId(id);
  }

  selectId(id: number) {
    this.catalogFacade.selectCatalog(id);
  }

  onSubmit() {
    this.catalogFacade.registerCourses(this.selects$).subscribe()
  }
}
