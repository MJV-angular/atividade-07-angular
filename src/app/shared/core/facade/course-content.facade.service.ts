import { Injectable } from '@angular/core';
import { Observable, Subscriber, combineLatest, distinctUntilChanged, map, of, shareReplay, switchMap, tap } from 'rxjs';
import { ApiCourseContentService } from '../async/api-course-content.service';
import { CourseContentStateService } from '../state/course-content-state.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})

export class CourseContentFacadeService {
  constructor(private apiServices: ApiCourseContentService, private courseContentState: CourseContentStateService, private sanitizer: DomSanitizer) { }


  readonly getCoursesContent$ = this.courseContentState
    .getStateCourseContent()
    .pipe(
      map(({ courseContent }) => courseContent),
      switchMap((stateCoursesContent) => {
        if (stateCoursesContent) {
          return of(stateCoursesContent);
        }
        return this.getCourseContent().pipe(
          tap((value) => this.courseContentState.addCoursesContent(value)),
        )
      }),
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
      map(({ courseContent }) => courseContent),
        this.courseContentState.addCoursesContentFiltered(value)
    })
  )


  getCourseContent() {
    return this.apiServices.getCoursesContent().pipe(
      tap((value) => this.courseContentState.addCoursesContent(value))
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
