import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedListDashboardItemComponent } from './feed-list-dashboard-item.component';

describe('FeedListDashboardItemComponent', () => {
  let component: FeedListDashboardItemComponent;
  let fixture: ComponentFixture<FeedListDashboardItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedListDashboardItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedListDashboardItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
