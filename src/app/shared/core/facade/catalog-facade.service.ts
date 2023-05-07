import { Injectable } from '@angular/core';
import { CourseStateService } from '../state/course-state.service';
import { Observable, distinctUntilChanged, map, shareReplay, tap } from 'rxjs';
import { IcourseState } from '../types/course-state.types';
import { CatalogStateService } from '../state/catalog-state.service';

@Injectable({
  providedIn: 'root'
})
export class CatalogFacadeService {

  constructor(public courseState: CourseStateService, private catalogState: CatalogStateService) {}

  getCatalog(): Observable<IcourseState[]> {
    return this.courseState.getState().pipe(
      tap(
        value =>
        this.catalogState.addCourses(value)
      ),
      distinctUntilChanged(),
      shareReplay(1),
    );
  }


  loadCatalog():Observable<ICatalog>{
    return this.catalogState.getState()
  }


  selectCatalog(course:IcourseState){
    return this.catalogState.selectCourses(course)
  }

  
}


export interface ICatalog{
  selects: IcourseState[]
  courses: IcourseState[];
}
