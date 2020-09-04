import { TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { AuthGuard } from '@shared/guard/auth.guard';
import { Auth0Service } from '@core/services/auth0/auth0.service';

describe('AuthGuard', () => {
	let guard: AuthGuard;
	const auth0Service: Auth0Service = jasmine.createSpyObj('Auth0Service', ['']);

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [RouterTestingModule],
			providers: [AuthGuard, { provide: Auth0Service, useValue: auth0Service }]
		});
		guard = TestBed.inject(AuthGuard);
	});

	it('should be created', () => {
		expect(guard).toBeTruthy();
	});
});
