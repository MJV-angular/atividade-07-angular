import { TestBed } from '@angular/core/testing';

import { PerfilModalService } from './perfil-modal.service';

describe('PerfilModalService', () => {
  let service: PerfilModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PerfilModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
