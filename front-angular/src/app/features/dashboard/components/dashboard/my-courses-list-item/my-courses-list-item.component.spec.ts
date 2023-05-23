import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCoursesListItemComponent } from './my-courses-list-item.component';

describe('MyCoursesListItemComponent', () => {
  let component: MyCoursesListItemComponent;
  let fixture: ComponentFixture<MyCoursesListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyCoursesListItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyCoursesListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
