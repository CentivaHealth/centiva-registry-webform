import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {
	AngularFirestore,
	AngularFirestoreDocument
} from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { User } from '@core/models/models';
import { BehaviorSubject } from 'rxjs';
import { MessageHandlerService } from '@core/services/message-handler/message-handler.service';
import { UserService } from '@core/services/user/user.service';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	userData: any; // Save logged in user data
	userIsLoggedIn = new BehaviorSubject<boolean>(null);

	constructor(
		public afs: AngularFirestore, // Inject Firestore service
		public afAuth: AngularFireAuth, // Inject Firebase auth service
		public router: Router,
		private messageHandlerService: MessageHandlerService,
		private userService: UserService
	) {
		/* Saving user data in localstorage when
    logged in and setting up null when logged out */
		this.afAuth.authState.subscribe(
			async (user): Promise<void> => {
				if (user) {
					const usrModel = await userService.getByEmail(user.email);
					const dataCopy = JSON.parse(JSON.stringify(user));
					dataCopy.testProvider = usrModel.testProvider;
					dataCopy.demo = usrModel.demo;
					dataCopy.testLabName = usrModel.testLabName;
					dataCopy.testLabId = usrModel.testLabId;
					localStorage.setItem('user', JSON.stringify(dataCopy));
					this.userIsLoggedIn.next(true);
					JSON.parse(localStorage.getItem('user'));
				} else {
					localStorage.setItem('user', null);
					JSON.parse(localStorage.getItem('user'));
					this.userIsLoggedIn.next(null);
				}
				return Promise.resolve();
			}
		);
	}

	get isLoggedIn(): boolean {
		const user = JSON.parse(localStorage.getItem('user'));
		return user !== null;
	}

	// Sign in with email/password
	signIn(email, password) {
		return this.afAuth
			.signInWithEmailAndPassword(email, password)
			.then((result): void => {
				this.setUserData(result.user);
			})
			.catch((error): void => {
				this.messageHandlerService.errorMessage(error.message);
			});
	}

	/* Setting up user data when sign in with username/password,
  sign up with username/password and sign in with social auth
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
	setUserData(user) {
		const userRef: AngularFirestoreDocument<any> = this.afs.doc(
			`users/${user.uid}`
		);
		const userData: User = {
			uid: user.uid,
			email: user.email,
			displayName: user.displayName,
			photoURL: user.photoURL,
			emailVerified: user.emailVerified
		};
		return userRef.set(userData, {
			merge: true
		});
	}

	// Sign out
	signOut() {
		return this.afAuth.signOut().then((): void => {
			localStorage.removeItem('user');
			this.router.navigate(['login']);
		});
	}
}
