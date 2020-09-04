import { Component } from '@angular/core';
import { Auth0Service } from '@core/services/auth0/auth0.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent {
	constructor(private auth0Service: Auth0Service) {}

	signInAuth0(): void {
		this.auth0Service.login('form');
	}
}
