import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '@core/services/auth/auth.service';
import { FormControl, FormGroup } from '@angular/forms';
import * as jsPDF from 'jspdf';

@Component({
	selector: 'app-form-page',
	templateUrl: './form-page.component.html',
	styleUrls: ['./form-page.component.scss']
})
export class FormPageComponent implements OnInit {
	isQRCodeVisible = false;
	form = new FormGroup({
		name: new FormControl(''),
		surName: new FormControl(''),
		dateOfBirth: new FormControl(''),
		testResult: new FormControl('')
	});
	myAngularxQrCode: string = '';
	@ViewChild('htmlData') htmlData: ElementRef;
	constructor(private authService: AuthService) {}

	ngOnInit(): void {}

	signOut(): void {
		this.authService.signOut();
	}

	onSubmit() {
		this.myAngularxQrCode = JSON.stringify(this.form.value);
		console.log(this.form.value);
	}

	qwe() {
		// this.isQRCodeVisible = !this.isQRCodeVisible;
		console.log(this.htmlData.nativeElement);
	}

	public downloadPDF(): void {
		let DATA = this.htmlData.nativeElement;
		let doc = new jsPDF('p', 'pt', 'a4');

		doc.fromHTML(DATA.innerHTML, 150, 150, {
			width: 1200
		});

		doc.save('angular-demo.pdf');
	}

	public openPDF(): void {
		let DATA = this.htmlData.nativeElement;
		let doc = new jsPDF('p', 'pt', 'a4');
		doc.fromHTML(DATA.innerHTML, 150, 150, {
			width: 1200
		});
		doc.output('dataurlnewwindow');
	}
}
