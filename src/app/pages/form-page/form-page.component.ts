import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '@core/services/auth/auth.service';
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
import { health } from '../../../models/proto/provider-add-info-hash';
import IAddInfoHashRequest = health.centiva.registry.model.IAddInfoHashRequest;

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
export class FormPageComponent implements OnInit {
	version: string;
	testLabName: string;
	form: FormGroup;
	qrDataString: string;
	addInfoHashData: IAddInfoHashRequest;
	@ViewChild('htmlData') htmlData: ElementRef;
	maxDate: Date;

	constructor(
		private authService: AuthService,
		private validationService: ValidationService,
		private infoHashService: InfoHashService,
		private messageHandlerService: MessageHandlerService
	) {}

	ngOnInit(): void {
		this.maxDate = new Date();
		this.qrDataString = 'default';
		this.version = '1';
		this.testLabName = 'MedLab';
		this.createForm();
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
			])
		});
	}

	signOut(): void {
		this.authService.signOut();
	}

	prepareAddInfoHashData(): void {
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

	onSubmit(): void {
		// formatting date fields
		this.form.value.dateOfBirth = this.formatDate(
			this.form.value.dateOfBirth,
			'YYYY-MM-DD'
		);
		this.form.value.testDate = this.formatDate(
			this.form.value.testDate,
			'YYYY-MM-DD'
		);

		this.prepareAddInfoHashData();
		this.infoHashService.sendInfoHash(this.addInfoHashData).subscribe(
			(): void => this.onSendInfoHashSuccess(),
			(error): void => this.onSendInfoHashError(error)
		);

		// creating QR-code
		this.prepateQRData();
		setTimeout(() => this.downloadPDF(), 0);
	}

	onSendInfoHashSuccess(): void {
		this.downloadPDF();
		this.messageHandlerService.successMessage('PDF was created.');
		this.form.reset();
	}

	onSendInfoHashError(error): void {
		let errorMessage = 'Server error';
		if (error.status === 400) {
			errorMessage = 'Bad Request';
		}
		if (error.status === 500) {
			errorMessage = 'Internal Server Error';
		}
		// const errorMessage = this.messageHandlerService.decodeMessage(error);
		this.messageHandlerService.errorMessage(errorMessage);
	}

	prepateQRData(): void {
		this.form.value.testLabName = this.testLabName;
		this.form.value.v = this.version; // adding version to QR-code
		const qrData = {
			name: this.form.value.name,
			surname: this.form.value.surname,
			dateOfBirth: this.form.value.dateOfBirth,
			testDate: this.form.value.testDate,
			testLabName: this.testLabName,
			testProvider: this.form.value.testProvider,
			testResult: this.form.value.testResult,
			v: this.version
		};
		this.qrDataString = JSON.stringify(qrData);
	}

	formatDate(formFieldValue: Date, dateFormat: string): string {
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
}
