import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedDashboardComponent } from './feed-dashboard.component';

describe('FeedDashboardComponent', () => {
  let component: FeedDashboardComponent;
  let fixture: ComponentFixture<FeedDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
