import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IcourseResponse, IcoursesState } from '../../interfaces/courses.interfaces';

@Injectable({
  providedIn: 'root',
})
export class CourseStateService {

  constructor() {}
  private state$ = new BehaviorSubject<IcoursesState>({
    courses: [],
    loaded: false,
    loading: false,
    saving: false,
    // filters: {
    //   isCompleted: null,
    //   title: null,
    // },
  });

  getState(): Observable<IcoursesState> {
    return this.state$.asObservable();
  }

  setCourses(courses: IcourseResponse[]) {
    const state = this.state$.getValue();
    this.state$.next({
      ...state,
      courses: courses,
    });
  }

  setLoading(loading: boolean) {
      this.state$.next({
        ...this.state$.getValue(),
        loading: loading,
      });
  }


  setLoaded(loaded: boolean) {
    this.state$.next({
      ...this.state$.getValue(),
      loaded: loaded,
    });
  }

  setSaving(saving: boolean) {
    this.state$.next({
      ...this.state$.getValue(),
      saving: saving,
    });
  }

  // setFilters(filters: TodoFilters) {
  //   this.state$.next({
  //     ...this.state$.getValue(),
  //     filters: filters,
  //   });
  // }

}
