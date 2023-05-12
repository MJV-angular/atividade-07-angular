import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesListDashboardComponent } from './courses-list-dashboard.component';

describe('CoursesListDashboardComponent', () => {
  let component: CoursesListDashboardComponent;
  let fixture: ComponentFixture<CoursesListDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesListDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursesListDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
