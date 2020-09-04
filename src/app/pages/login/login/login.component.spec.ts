import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from '@pages/login/login/login.component';
import { Auth0Service } from '@core/services/auth0/auth0.service';
import { ValidationService } from '@core/services/validation/validation.service';
import { MessageHandlerService } from '@core/services/message-handler/message-handler.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('LoginComponent', (): void => {
	let component: LoginComponent;
	let fixture: ComponentFixture<LoginComponent>;
	let auth0Service: any;
	let validationService: any;
	let messageHandlerService: any;

	beforeEach(async((): void => {
		auth0Service = jasmine.createSpyObj('Auth0Service', ['userProfile$']);
		validationService = jasmine.createSpyObj('ValidationService', [
			'checkSpaces'
		]);
		messageHandlerService = jasmine.createSpyObj('MessageHandlerService', [
			'errorMessage'
		]);
		validationService.setValidators = jasmine.createSpy().and.returnValue([]);

		TestBed.configureTestingModule({
			declarations: [LoginComponent],
			imports: [ReactiveFormsModule, RouterTestingModule],
			providers: [
				LoginComponent,
				{ provide: Auth0Service, useValue: auth0Service },
				{ provide: ValidationService, useValue: validationService },
				{ provide: MessageHandlerService, useValue: messageHandlerService }
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
