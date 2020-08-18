import {TestBed} from '@angular/core/testing';

import {MessageHandlerService} from './message-handler.service';
import {ToastrService} from 'ngx-toastr';

describe('MessageHandlerService', () => {
  let service: MessageHandlerService;

  beforeEach(() => {
    const toastrService = jasmine.createSpyObj('ToastrService', ['show']);

    TestBed.configureTestingModule({
      providers: [
        MessageHandlerService,
        {provide: ToastrService, useValue: toastrService}
      ]

    });
    service = TestBed.inject(MessageHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
