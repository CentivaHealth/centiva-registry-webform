import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormsModule } from '@angular/forms';
import { FormPageComponent } from '@pages/form-page/form-page.component';
import { OwlDateTimeModule } from 'ng-pick-datetime';
import {QrBuilderWrapperModule} from '@core/libs/qr-builder-wrapper/qr-builder-wrapper.module';
import {AuthService} from '@core/services/auth/auth.service';
import {ValidationService} from '@core/services/validation/validation.service';
import {InfoHashService} from '@core/services/info-hash/info-hash.service';
import {MessageHandlerService} from '@core/services/message-handler/message-handler.service';
import {MomentModule} from 'ngx-moment';

describe('FormPageComponent', (): void => {
	let component: FormPageComponent;
	let fixture: ComponentFixture<FormPageComponent>;


 let authService: AuthService;
 let validationService: ValidationService;
 let infoHashService: InfoHashService;
 let messageHandlerService: MessageHandlerService;

	beforeEach(async((): void => {
	  authService = jasmine.createSpyObj('AuthService', ['isLoggedIn']);
    validationService = jasmine.createSpyObj('ValidationService', ['setValidators']);
    infoHashService = jasmine.createSpyObj('InfoHashService', ['sendInfoHash']);
    messageHandlerService = jasmine.createSpyObj('MessageHandlerService', ['successMessage']);
    validationService.setValidators = jasmine.createSpy().and.returnValue([]);
		TestBed.configureTestingModule({
			declarations: [FormPageComponent],
			imports: [ReactiveFormsModule, OwlDateTimeModule, QrBuilderWrapperModule, MomentModule],
      providers: [
        FormPageComponent,
        { provide: AuthService, useValue: authService },
        { provide: ValidationService, useValue: validationService },
        { provide: InfoHashService, useValue: infoHashService },
        { provide: MessageHandlerService, useValue: messageHandlerService }
      ]
		}).compileComponents();

		fixture = TestBed.createComponent(FormPageComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	}));

	it('should create', (): void => {
		expect(component).toBeTruthy();
	});
});
