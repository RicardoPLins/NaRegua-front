import { TestBed } from '@angular/core/testing';

import { SalaoFirestoreService } from './salao-firestore.service';

describe('SalaoFirestoreService', () => {
  let service: SalaoFirestoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalaoFirestoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
