import { Injectable } from '@angular/core';
import {
	ActivatedRouteSnapshot,
	RouterStateSnapshot,
	UrlTree,
	CanActivate,
	Router
} from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Auth0Service } from '@core/services/auth0/auth0.service';

@Injectable({
	providedIn: 'root'
})
export class AuthGuard implements CanActivate {
	constructor(private auth: Auth0Service, private router: Router) {}

	canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Observable<boolean> | Promise<boolean | UrlTree> | boolean {
		return this.auth.isAuthenticated$.pipe(
			tap((loggedIn): void => {
				if (!loggedIn) {
					this.router.navigate(['login']);
				}
			})
		);
	}
}
