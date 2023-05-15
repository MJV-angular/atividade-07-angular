import { Injectable } from '@angular/core';
import {  distinctUntilChanged, map, shareReplay, switchMap, tap } from 'rxjs';
import { CatalogStateService } from '../state/catalog-state.service';
import { ApiCoursesFacadeService } from './api-courses.facade.service';
import { ApiUserFacadeService } from './api-user.facade.service';
@Injectable({
  providedIn: 'root'
})
export class CatalogFacadeService {

  constructor(public courseFacade: ApiCoursesFacadeService, private catalogState: CatalogStateService, private userFacade: ApiUserFacadeService) { }

  readonly getCatalog$ = this.courseFacade.getCourses$.pipe(
    tap((value) => this.catalogState.addCourses(value)),
    switchMap(() => this.userFacade.getUser$),
    tap(e => console.log(e)),
    map((value) => value.courses.map(ele => this.selectCatalog(ele.courseId))),
    switchMap(() => this.catalogState.getState()),
    shareReplay(1),
  );

  selectCatalog(id: number) {
    return this.catalogState.selectCourses(id)
  }


}


