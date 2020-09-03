import { TestBed } from '@angular/core/testing';

import { Router } from '@angular/router';
import { Auth0Service } from '@core/services/auth0/auth0.service';

describe('Auth0Service', () => {
	let service: Auth0Service;
	let router: Router;

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [{ provide: Router, useValue: router }]
		});
		service = TestBed.inject(Auth0Service);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
