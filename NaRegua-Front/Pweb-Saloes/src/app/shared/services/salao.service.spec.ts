import { TestBed } from '@angular/core/testing';

import { SalaoService } from './salao.service';

describe('SalaoService', () => {
  let service: SalaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
