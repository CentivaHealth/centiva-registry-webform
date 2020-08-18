import { TestBed } from '@angular/core/testing';

import { InfoHashService } from './info-hash.service';
import {HttpClient} from '@angular/common/http';

describe('InfoHashService', () => {
  let service: InfoHashService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        InfoHashService,
        { provide : HttpClient}
      ]
    });
    service = TestBed.inject(InfoHashService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
