import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, Subscription, switchMap, take, takeUntil, tap } from 'rxjs';
import { CatalogFacadeService } from 'src/app/shared/core/facade/catalog-facade.service';
import { UserFacadeService } from 'src/app/shared/core/facade/user-facade.service';
import { CourseUser } from 'src/app/shared/interfaces/register-courses.interfaces';

@Component({
  selector: 'app-catalog-main',
  templateUrl: './catalog-main.component.html',
  styleUrls: ['./catalog-main.component.scss'],
})
export class CatalogMainComponent implements OnDestroy {
  constructor(
    private catalogFacade: CatalogFacadeService,
    private userFacade: UserFacadeService,
    private router: Router
  ) {}

  class?: string;
  selects: number[] = [];
  courses$ = this.catalogFacade.getCourses$;
  coursesUser$ = this.userFacade.getCoursesUser$;
  registerSubscription: Subscription = new Subscription();

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
    this.catalogFacade.registerCourses(this.selects).pipe(
      take(1)
    ).subscribe({
      complete: () => {
        this.redirectTopath('/dashboard');
      },
    });
  }

  ngOnDestroy(): void {
    this.registerSubscription.unsubscribe();
  }
}
