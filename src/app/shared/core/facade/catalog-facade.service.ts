import { Injectable } from '@angular/core';
import { CourseStateService } from '../state/course-state.service';
import { Observable, distinctUntilChanged, map, shareReplay, tap } from 'rxjs';
import { IcourseState } from '../../interfaces/courses.interfaces';
import { CatalogStateService } from '../state/catalog-state.service';
import { ICatalog } from '../../interfaces/catalog.interfaces';

@Injectable({
  providedIn: 'root'
})
export class CatalogFacadeService {

  constructor(public courseState: CourseStateService, private catalogState: CatalogStateService) {}

  getCatalog(): Observable<IcourseState> {
    return this.courseState.getState().pipe(
      tap(
        value =>
        this.catalogState.addCourses(value.courses)
      ),
      distinctUntilChanged(),
      shareReplay(1),
    );
  }


  loadCatalog():Observable<ICatalog>{
    return this.catalogState.getState()
  }


  selectCatalog(id:number){
    return this.catalogState.selectCourses(id)
  }


}


