import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogMainComponent } from './catalog-main.component';

describe('CatalogMainComponent', () => {
  let component: CatalogMainComponent;
  let fixture: ComponentFixture<CatalogMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatalogMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
