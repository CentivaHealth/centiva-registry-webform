import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormsModule } from '@angular/forms';
import { FormPageComponent } from '@pages/form-page/form-page.component';
import { OwlDateTimeModule } from 'ng-pick-datetime';
import {QrBuilderWrapperModule} from '@core/libs/qr-builder-wrapper/qr-builder-wrapper.module';

describe('FormPageComponent', (): void => {
	let component: FormPageComponent;
	let fixture: ComponentFixture<FormPageComponent>;

	beforeEach(async((): void => {
		TestBed.configureTestingModule({
			declarations: [FormPageComponent],
			imports: [ReactiveFormsModule, OwlDateTimeModule,QrBuilderWrapperModule]
		}).compileComponents();
	}));

	beforeEach((): void => {
		fixture = TestBed.createComponent(FormPageComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', (): void => {
		expect(component).toBeTruthy();
	});
});
