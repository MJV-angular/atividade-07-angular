import { Injectable } from '@angular/core';
import { Observable, Subscriber, combineLatest, distinctUntilChanged, filter, map, shareReplay, tap } from 'rxjs';
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
      tap((coursesContent) => coursesContent),
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

  readonly getCoursesfilterInitial$ = this.courseContentState.getStateCourseContent().pipe(
    tap((value) =>
        this.courseContentState.addCoursesContentFiltered(value.courseContent)
    )
  )


  getCourseContent(): Observable<ICourseContent[]> {
    return this.apiServices.getCoursesContent().pipe(
      tap((value) => {
        this.courseContentState.addCoursesContent(value)
      })
    )
  }

  filteredCoursesContent(search: string) {
    search = search.toLocaleLowerCase()
    return this.getCoursesContent$.pipe(
      map((value) => value.courseContent.filter(({ title, text }) => title.toLocaleLowerCase().includes(search) || text.toLocaleLowerCase().includes(search))),
      tap((value) =>
        this.courseContentState.addCoursesContentFiltered(value)
      )
    )
  }
}
