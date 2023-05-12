import { Component, OnInit } from '@angular/core';
import { ApiUserFacadeService } from './shared/core/facade/api-user.facade.service';
import { CourseContentFacadeService } from './shared/core/facade/course-content.facade.service';
import { ApiCoursesFacadeService } from './shared/core/facade/api-courses.facade.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private userFacade: ApiUserFacadeService, private courseContentFacade: CourseContentFacadeService, private courseFacade: ApiCoursesFacadeService) { }

  ngOnInit(): void {
    this.userFacade.setUserlocalHost()
    this.userFacade.getUser$.subscribe(user => {
      console.log("app => user", user)
    }
    );
    this.courseContentFacade.getCourseContent().subscribe(courseContent => {
      console.log("app => coursesContent", courseContent)
    });
    this.courseFacade.getCourses().subscribe(courseContent => {
      console.log("app => courses", courseContent)
    });
    this.userFacade.getCoursesByUser$.subscribe(coursesByUser => {
      console.log("app => coursesByUsers", coursesByUser)
    })
  }
}
