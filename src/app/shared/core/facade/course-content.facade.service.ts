import { Injectable } from '@angular/core';
import { Observable, Subscriber, combineLatest, distinctUntilChanged, map, of, shareReplay, switchMap, tap } from 'rxjs';
import { ApiCourseContentService } from '../async/api-course-content.service';
import { ICourseContent } from '../../interfaces/course-content.interface';
import { CourseContentStateService } from '../state/course-content-state.service';

@Injectable({
  providedIn: 'root'
})

export class CourseContentFacadeService {
  constructor(private apiServices: ApiCourseContentService, private courseContentState: CourseContentStateService) { }


  readonly getCoursesContent$ = this.courseContentState
    .getStateCourseContent()
    .pipe(
      map((value) => value.courseContent),
      switchMap((stateCoursesContent) => {
        if (stateCoursesContent.length > 0) {
          return of(stateCoursesContent);
        }
        return this.getCourseContent()
      }
      ),
      distinctUntilChanged(),
      shareReplay(1),
    );


  readonly getCoursesfilter$ = this.courseContentState
    .getStateCoursesContentFilter()
    .pipe(
      map((coursesContent) =>
        coursesContent.filterCourseContent,
      ),
      distinctUntilChanged(),
      shareReplay(1),
    );

  readonly getCoursesfilterInitial$ = this.getCoursesContent$.pipe(
    tap((value) => {
      this.courseContentState.addCoursesContentFiltered(value)
    })
  )


  getCourseContent(): Observable<ICourseContent[]> {
    return this.apiServices.getCoursesContent().pipe(
      tap((value) => this.courseContentState.addCoursesContent(value)
      )
    )
  }

  filteredCoursesContent(search: string) {
    search = search.toLocaleLowerCase()
    return this.getCoursesContent$.pipe(
      map((value) => value.filter(({ title, text }) => title.toLocaleLowerCase().includes(search) || text.toLocaleLowerCase().includes(search))),
      tap((value) =>
        this.courseContentState.addCoursesContentFiltered(value)
      )
    )
  }
}
