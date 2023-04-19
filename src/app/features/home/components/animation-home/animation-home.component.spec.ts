import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationHomeComponent } from './animation-home.component';

describe('AnimationHomeComponent', () => {
  let component: AnimationHomeComponent;
  let fixture: ComponentFixture<AnimationHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimationHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimationHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
