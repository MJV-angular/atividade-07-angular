import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PicturePerfilComponent } from './picture-perfil.component';

describe('PicturePerfilComponent', () => {
  let component: PicturePerfilComponent;
  let fixture: ComponentFixture<PicturePerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PicturePerfilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PicturePerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
