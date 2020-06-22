import { Component, OnInit } from '@angular/core';
import { AuthService } from '@core/services/auth/auth.service';
import { FormControl, FormGroup } from '@angular/forms';

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
		this.isQRCodeVisible = !this.isQRCodeVisible;
	}
}
