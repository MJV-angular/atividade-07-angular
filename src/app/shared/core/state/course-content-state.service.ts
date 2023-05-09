import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IcourseContentState , ICourseContent} from '../../interfaces/course-content.interface';
@Injectable({
  providedIn: 'root'
})

export class CourseContentStateService {

  private state$ = new BehaviorSubject<IcourseContentState>({
    courseContent: []
  })

  getState(): Observable<IcourseContentState> {
    return this.state$.asObservable()
  }

  getCoursesContent(coursesContent: ICourseContent[]) {
    console.log(this.state$.getValue())
    const state = this.state$.getValue();
    this.state$.next({
      courseContent: [...state.courseContent ,...coursesContent]
    });
  }

}


