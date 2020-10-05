import {
	Component,
	ElementRef,
	OnDestroy,
	OnInit,
	ViewChild
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import * as jsPDF from 'jspdf';
import { ValidationService } from '@core/services/validation/validation.service';
import {
	DateTimeAdapter,
	OWL_DATE_TIME_FORMATS,
	OWL_DATE_TIME_LOCALE
} from 'ng-pick-datetime';
import { MomentDateTimeAdapter } from 'ng-pick-datetime/date-time/adapter/moment-adapter/moment-date-time-adapter.class';
import * as moment from 'moment';
import { InfoHashService } from '@core/services/info-hash/info-hash.service';
import { MessageHandlerService } from '@core/services/message-handler/message-handler.service';
import { AddInfoHashRequestData } from '@models/provider-add-info-hash.model';
import { Auth0Service } from '@core/services/auth0/auth0.service';
import { map, takeUntil } from 'rxjs/operators';
import { UserMetadata } from '@core/models/user.model';
import { Subject } from 'rxjs';
import { environment } from '@environments/environment';

// Date picker formats
export const MY_MOMENT_FORMATS = {
	parseInput: 'l LT',
	fullPickerInput: 'l LT',
	datePickerInput: 'YYYY-MM-DD',
	timePickerInput: 'LT',
	monthYearLabel: 'MMM YYYY',
	dateA11yLabel: 'LL',
	monthYearA11yLabel: 'MMMM YYYY'
};

@Component({
	selector: 'app-form-page',
	templateUrl: './form-page.component.html',
	styleUrls: ['./form-page.component.scss'],
	providers: [
		{
			provide: DateTimeAdapter,
			useClass: MomentDateTimeAdapter,
			deps: [OWL_DATE_TIME_LOCALE]
		},
		{ provide: OWL_DATE_TIME_FORMATS, useValue: MY_MOMENT_FORMATS }
	]
})
export class FormPageComponent implements OnInit, OnDestroy {
	title = 'Test Result';
	unsubscribe: Subject<void> = new Subject<void>();
	isDemoUser: boolean;
	version: string;
	testLabName: string;
	testProvider: string;
	form: FormGroup;
	qrDataString: string;
	addInfoHashData: AddInfoHashRequestData;
	@ViewChild('htmlData') htmlData: ElementRef;
	maxDate: Date;
	isSubmitButtonDisabled = false;

	constructor(
		private auth0Service: Auth0Service,
		private validationService: ValidationService,
		private infoHashService: InfoHashService,
		private messageHandlerService: MessageHandlerService
	) {}

	ngOnInit(): void {
		this.maxDate = new Date();
		this.qrDataString = 'default';
		this.version = '2';
		this.createForm();
		this.getUserMetadata();
	}

	getUserMetadata(): void {
		this.auth0Service.userProfile$
			.pipe(
				takeUntil(this.unsubscribe),
				map(
					(data): UserMetadata => {
						if (data) {
							return data[environment.auth0Config.userMetadataNamespace];
						}
					}
				)
			)
			.subscribe((userMetadata: UserMetadata): void => {
				this.handleUserMetadata(userMetadata);
			});
	}

	handleUserMetadata(userMetadata: UserMetadata): void {
		if (userMetadata && userMetadata.testLabName && userMetadata.testProvider) {
			this.isDemoUser = userMetadata.demo;
			this.testProvider = this.addDemoLabel(userMetadata.testProvider);
			this.testLabName = this.addDemoLabel(userMetadata.testLabName);
			this.setUserFields();
		}
	}

	addDemoLabel(data: string): string {
		if (data.includes('[DEMO]')) {
			return data;
		}
		return `${this.isDemoUser ? '[DEMO] ' : ''}${data}`;
	}

	createForm(): void {
		this.form = new FormGroup({
			name: new FormControl('', [
				...this.validationService.setValidators('text')
			]),
			surname: new FormControl('', [
				...this.validationService.setValidators('text')
			]),
			dateOfBirth: new FormControl('', [
				...this.validationService.setValidators('date')
			]),
			testDate: new FormControl('', [
				...this.validationService.setValidators('date')
			]),
			testProvider: new FormControl('', [
				...this.validationService.setValidators('select')
			]),
			testResult: new FormControl('', [
				...this.validationService.setValidators('select')
			]),
			testLabName: new FormControl(),
			v: new FormControl()
		});
	}

	setUserFields(): void {
		this.form.patchValue({ testLabName: this.testLabName });
		this.form.patchValue({ v: this.version });
	}

	signOut(): void {
		this.auth0Service.logout();
	}

	onSubmit(): void {
		this.prepareAddInfoHashData();
		this.isSubmitButtonDisabled = true;
		this.infoHashService.sendInfoHash(this.addInfoHashData).subscribe(
			(): void => this.onSendInfoHashSuccess(),
			(error): void => this.onSendInfoHashError(error)
		);

		// creating QR-code
		this.prepateQRData();
	}

	prepareAddInfoHashData(): void {
		// formatting date fields
		this.form.value.dateOfBirth = this.formatDate(
			this.form.value.dateOfBirth,
			'YYYY-MM-DD'
		);
		this.form.value.testDate = this.formatDate(
			this.form.value.testDate,
			'YYYY-MM-DD'
		);
		this.addInfoHashData = null;
		this.addInfoHashData = {
			infoHash: this.infoHashService.hashDataString(this.form.value),
			testProvider: this.form.value.testProvider || null,
			version: this.version || null,
			testDate: this.validateDate(this.form.value.testDate),
			testResult: this.form.value.testResult || null
		};
	}

	validateDate(dateString: string): string | null {
		return dateString === 'Invalid date' ? null : dateString;
	}

	onSendInfoHashSuccess(): void {
		this.downloadPDF();
		this.messageHandlerService.successMessage('PDF was created.');
		this.resetForm();
		this.isSubmitButtonDisabled = false;
	}

	resetForm(): void {
		this.form.reset();
		this.form.patchValue({ testLabName: this.testLabName });
		this.form.patchValue({ v: this.version });
	}

	onSendInfoHashError(error): void {
		this.isSubmitButtonDisabled = false;
		this.messageHandlerService.decodedErrorMessage(error);
	}

	prepateQRData(): void {
		const qrData = {
			name: this.form.value.name,
			surname: this.form.value.surname,
			dateOfBirth: this.form.value.dateOfBirth,
			testDate: this.form.value.testDate,
			testLabName: this.form.value.testLabName,
			testProvider: this.form.value.testProvider,
			testResult: this.form.value.testResult,
			v: this.version
		};
		this.qrDataString = JSON.stringify(qrData);
	}

	formatDate(formFieldValue: string, dateFormat: string): string {
		return moment(formFieldValue).format(dateFormat);
	}

	// downloading PDF
	downloadPDF(): void {
		const qrcode = document.getElementById('qrcode');
		const data = this.htmlData.nativeElement;
		// form data
		const doc = new jsPDF('p', 'pt', 'a4');
		doc.fromHTML(data.innerHTML, 150, 150, {
			width: 1200
		});

		// QR code img
		const imageData = this.getBase64Image(qrcode.firstChild.firstChild);
		doc.addImage(imageData, 'JPG', 136, 450);
		doc.save(
			`${this.form.value.name}-${this.form.value.surname}-test-result.pdf`
		);
	}

	getBase64Image(img): string {
		const canvas = document.createElement('canvas');
		canvas.width = img.width;
		canvas.height = img.height;
		const ctx = canvas.getContext('2d');
		ctx.drawImage(img, 0, 0);
		return canvas.toDataURL('image/png');
	}

	ngOnDestroy(): void {
		this.unsubscribe.next();
		this.unsubscribe.complete();
	}
}
