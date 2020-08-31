import { TestBed } from '@angular/core/testing';

import { HttpClient } from '@angular/common/http';
import { MessageHandlerService } from '@core/services/message-handler/message-handler.service';
import { InfoHashService } from './info-hash.service';

describe('InfoHashService', () => {
	let service: InfoHashService;
	let messageHandlerService: MessageHandlerService;

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				InfoHashService,
				{ provide: HttpClient },
				{ provide: MessageHandlerService, useValue: messageHandlerService }
			]
		});
		service = TestBed.inject(InfoHashService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
