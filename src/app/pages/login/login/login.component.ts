import { Component } from '@angular/core';
import { AuthService } from '@core/services/auth/auth.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent {
	constructor(private authService: AuthService) {}

	signIn(userName: string, userPassword: string): void {
		this.authService.signIn(userName, userPassword);
	}
}
