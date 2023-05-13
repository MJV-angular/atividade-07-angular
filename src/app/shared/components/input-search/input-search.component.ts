import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subject, debounceTime, filter, map, takeUntil, distinctUntilChanged, tap, switchMap, Observable, Subscription } from 'rxjs';
import { CourseContentFacadeService } from '../../core/facade/course-content.facade.service';
import { ICourseContent } from '../../interfaces/course-content.interface';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.scss']
})
export class InputSearchComponent implements OnInit {
  inputSearch = new FormControl();

  constructor(private coursesContentFacade: CourseContentFacadeService) {
  }



  ngOnInit(): void {
    this.inputSearch
      .valueChanges
      .pipe(
        // distinctUntilChanged(),
        // debounceTime(200),
        map(() => this.inputSearch.getRawValue().trim()),
        switchMap(value => this.coursesContentFacade.filteredCoursesContent(value)),
      ).subscribe()
  }
}
