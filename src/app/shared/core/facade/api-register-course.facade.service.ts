import { Injectable } from '@angular/core';
import { ApiRegisterCourseService } from '../async/api-register-course.service';
import {  IRegisterCourseRequest, IRegisterCourseResponse } from '../../interfaces/register-courses.interfaces';
import { Observable, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiRegisterCourseFacadeService {

  constructor(public apiServices: ApiRegisterCourseService) {

  }

  addRegisterCourse(coursesId: IRegisterCourseRequest){
    return this.apiServices.registerCourse(coursesId).subscribe(value => console.log(value))
  }
}
