import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from '@pages/login/login/login.component';
import { AuthService } from '@core/services/auth/auth.service';
import { ValidationService } from '@core/services/validation/validation.service';
import {MessageHandlerService} from '@core/services/message-handler/message-handler.service';
import {RouterTestingModule} from '@angular/router/testing';

describe('LoginComponent', (): void => {
	let component: LoginComponent;
	let fixture: ComponentFixture<LoginComponent>;
	let authService: any;
	let validationService: any;
	let messageHandlerService: any;

	beforeEach(async((): void => {
		authService = jasmine.createSpyObj('AuthService', [
			'signIn',
			'setUserData',
			'signOut'
		]);
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
				{ provide: AuthService, useValue: authService },
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
