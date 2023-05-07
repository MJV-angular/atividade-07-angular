import { TestBed } from '@angular/core/testing';

import { ApiCourseUserService } from './api-course-user.service';

describe('ApiCourseUserService', () => {
  let service: ApiCourseUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiCourseUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
