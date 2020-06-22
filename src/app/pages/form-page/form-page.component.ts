import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '@core/services/auth/auth.service';
import {
	AbstractControl,
	FormControl,
	FormGroup,
	ValidatorFn,
	Validators
} from '@angular/forms';
import * as jsPDF from 'jspdf';
import { ValidationService } from '@core/services/validation/validation.service';

@Component({
	selector: 'app-form-page',
	templateUrl: './form-page.component.html',
	styleUrls: ['./form-page.component.scss']
})
export class FormPageComponent implements OnInit {
	form: FormGroup;
	myAngularxQrCode = '';
	@ViewChild('htmlData') htmlData: ElementRef;

	constructor(
		private authService: AuthService,
		private validationService: ValidationService
	) {}

	ngOnInit(): void {
		this.createForm();
	}

	createForm(): void {
		this.form = new FormGroup({
			name: new FormControl('', [...this.validationService.setValidators()]),
			surName: new FormControl('', [...this.validationService.setValidators()]),
			dateOfBirth: new FormControl('', [
				...this.validationService.setValidators()
			]),
			testingDate: new FormControl('', [
				...this.validationService.setValidators()
			]),
			testResult: new FormControl('', [
				...this.validationService.setValidators()
			])
		});
	}

	signOut(): void {
		this.authService.signOut();
	}

	onSubmit(): void {
		// creating QR-code
		this.myAngularxQrCode = JSON.stringify(this.form.value);

		setTimeout((): void => {
			this.downloadPDF();
		}, 0);
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
		doc.addImage(imageData, 'JPG', 136, 400);
		doc.save(
			`${this.form.value.name}-${this.form.value.surName}-test-result.pdf`
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
