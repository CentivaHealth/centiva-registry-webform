import { Component, OnInit } from '@angular/core';
import { AuthService } from '@core/services/auth/auth.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ValidationService } from '@core/services/validation/validation.service';
import { Router } from '@angular/router';
import { MessageHandlerService } from '@core/services/message-handler/message-handler.service';
import { filter } from 'rxjs/operators';
import { Auth0Service } from '@core/services/auth0/auth0.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	isAuthenticated: boolean;

	form: FormGroup;
	constructor(
		private authService: AuthService,
		private validationService: ValidationService,
		private router: Router,
		private messageHandlerService: MessageHandlerService,
		private auth0Service: Auth0Service
	) {}

	ngOnInit(): void {
		this.createForm();
	}

	createForm(): void {
		this.form = new FormGroup({
			email: new FormControl('', [
				...this.validationService.setValidators('email')
			]),
			password: new FormControl('', [
				...this.validationService.setValidators('text')
			])
		});
	}

	// signIn(userName: string, userPassword: string): void {
	// 	this.authService.signIn(userName, userPassword);
	// 	this.authService.userIsLoggedIn.subscribe(
	// 		(data): void => {
	// 			this.router.navigateByUrl('form');
	// 		},
	// 		(error): void => this.messageHandlerService.errorMessage(error.message)
	// 	);
	// }

	signIn(): void {
		this.auth0Service.login('/login');
	}

	qwe() {
		// this.isAuthenticated = this.auth0Service.loggedIn;
		this.auth0Service.isAuthenticated$.subscribe((data) => {
			this.isAuthenticated = data;
		});
	}
}
