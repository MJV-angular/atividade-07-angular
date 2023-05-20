import { Component, OnInit } from '@angular/core';

import { CourseContentFacadeService } from './shared/core/facade/course-content.facade.service';
import { UserFacadeService } from './shared/core/facade/user-facade.service';
import { forkJoin, switchMap, take } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private userFacade: UserFacadeService, private courseContentFacade: CourseContentFacadeService) { }

  ngOnInit(): void {
    this.userFacade.setUserWithlocalHost();
    this.userFacade.updatedLocalStorage$.subscribe();
  }
}
