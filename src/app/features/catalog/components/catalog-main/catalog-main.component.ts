import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import {
  Subject,
  Subscription,
  map,
  switchMap,
  take,
  takeUntil,
  tap,
} from 'rxjs';
import { CatalogFacadeService } from 'src/app/shared/core/facade/catalog-facade.service';
import { UserFacadeService } from 'src/app/shared/core/facade/user-facade.service';
import { CourseUser } from 'src/app/shared/interfaces/register-courses.interfaces';

@Component({
  selector: 'app-catalog-main',
  templateUrl: './catalog-main.component.html',
  styleUrls: ['./catalog-main.component.scss'],
})
export class CatalogMainComponent implements OnDestroy, OnInit {
  constructor(
    private catalogFacade: CatalogFacadeService,
    private userFacade: UserFacadeService,
    private router: Router
  ) {}

  class?: string;
  selects: number[] = [];
  courses$ = this.catalogFacade.getCourses$;
  userCoursesIds!: number[];
  coursesUserSubscription: Subscription = new Subscription();
  registerSubscription: Subscription = new Subscription();

  ngOnInit(): void {
    this.coursesUserSubscription = this.userFacade.getCoursesUser$
      .pipe(map((coursesUser) => coursesUser.map((ele) => ele.course.id)))
      .subscribe((coursesUserId) => (this.userCoursesIds = coursesUserId));
  }
  onClick(id: number) {
    if (this.selects.indexOf(id) == -1) {
      this.selects.push(id);
    } else {
      this.selects = this.selects.filter((ele) => ele !== id);
    }
  }

  redirectTopath(pathDirect: string) {
    this.router.navigateByUrl(pathDirect);
  }

  onSubmit() {
    if (this.selects.length > 0) {
      this.catalogFacade
        .registerCourses(this.selects)
        .pipe(take(1))
        .subscribe({
          complete: () => {
            this.redirectTopath('/dashboard');
          },
        });

      this.selects = [];
    } else {
      this.redirectTopath('/dashboard');
    }
  }

  ngOnDestroy(): void {
    this.registerSubscription.unsubscribe();
  }
}
