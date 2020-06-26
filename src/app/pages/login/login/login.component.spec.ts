import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from '@pages/login/login/login.component';
import { AuthService } from '@core/services/auth/auth.service';
import { ValidationService } from '@core/services/validation/validation.service';

describe('LoginComponent', (): void => {
	let component: LoginComponent;
	let fixture: ComponentFixture<LoginComponent>;
	let authService: any;
	let validationService: any;

	beforeEach(async((): void => {
		authService = jasmine.createSpyObj('AuthService', [
			'signIn',
			'setUserData',
			'signOut'
		]);
		validationService = jasmine.createSpyObj('ValidationService', [
			'setValidators'
		]);
		TestBed.configureTestingModule({
			declarations: [LoginComponent],
			imports: [ReactiveFormsModule],
			providers: [
				{ provide: AuthService, useValue: authService },
				{ provide: ValidationService, useValue: validationService }
			]
		}).compileComponents();
	}));

	beforeEach((): void => {
		fixture = TestBed.createComponent(LoginComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', (): void => {
		expect(component).toBeTruthy();
	});
});
