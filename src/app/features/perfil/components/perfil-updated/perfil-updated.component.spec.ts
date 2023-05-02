import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilUpdatedComponent } from './perfil-updated.component';

describe('PerfilUpdatedComponent', () => {
  let component: PerfilUpdatedComponent;
  let fixture: ComponentFixture<PerfilUpdatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilUpdatedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilUpdatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
