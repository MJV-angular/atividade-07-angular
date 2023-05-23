import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPictureTextComponent } from './card-picture-text.component';

describe('CardPictureTextComponent', () => {
  let component: CardPictureTextComponent;
  let fixture: ComponentFixture<CardPictureTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardPictureTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardPictureTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
