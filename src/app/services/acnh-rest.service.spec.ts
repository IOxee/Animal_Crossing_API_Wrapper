import { TestBed } from '@angular/core/testing';

import { AcnhRestService } from './acnh-rest.service';

describe('AcnhRestService', () => {
  let service: AcnhRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcnhRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
