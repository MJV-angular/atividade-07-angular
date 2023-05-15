import { Component, OnInit } from '@angular/core';
import { ApiUserFacadeService } from './shared/core/facade/api-user.facade.service';
import { CourseContentFacadeService } from './shared/core/facade/course-content.facade.service';
import { ApiCoursesFacadeService } from './shared/core/facade/api-courses.facade.service';
import { forkJoin, switchMap, take } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private userFacade: ApiUserFacadeService, private courseContentFacade: CourseContentFacadeService, private courseFacade: ApiCoursesFacadeService) { }

  ngOnInit(): void {
    this.userFacade.setUserlocalHost();
  }
}
