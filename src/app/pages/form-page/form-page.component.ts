import { Component, OnInit } from '@angular/core';
import { AuthService } from '@core/services/auth/auth.service';

@Component({
	selector: 'app-form-page',
	templateUrl: './form-page.component.html',
	styleUrls: ['./form-page.component.scss']
})
export class FormPageComponent implements OnInit {
	constructor(private authService: AuthService) {}

	ngOnInit(): void {}

	signOut(): void {
		this.authService.signOut();
	}
}
