import { TestBed } from '@angular/core/testing';

import { ServiciocursosService } from './serviciocursos.service';

describe('ServiciocursosService', () => {
  let service: ServiciocursosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiciocursosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
