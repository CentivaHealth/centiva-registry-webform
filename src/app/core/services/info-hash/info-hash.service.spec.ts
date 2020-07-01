import { TestBed } from '@angular/core/testing';

import { InfoHashService } from './info-hash.service';

describe('InfoHashService', () => {
  let service: InfoHashService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoHashService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
