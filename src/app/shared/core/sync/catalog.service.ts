import { Injectable } from '@angular/core';
import { CourseStateService } from '../state/course-state.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { IcourseState } from '../types/course-state.types';
@Injectable({
  providedIn: 'root'
})
export class CatalogService {
  private courseState$ = new BehaviorSubject<IcourseState[]>([])

  getState(): Observable<IcourseState[]> {
    return this.courseState$.asObservable()
  }

  constructor(public state: CourseStateService ) { }

}
