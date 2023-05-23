import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedListDashboardComponent } from './feed-list-dashboard.component';

describe('FeedListDashboardComponent', () => {
  let component: FeedListDashboardComponent;
  let fixture: ComponentFixture<FeedListDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedListDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedListDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
