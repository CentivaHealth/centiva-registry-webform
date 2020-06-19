import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {
	AngularFirestore,
	AngularFirestoreDocument
} from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { User } from '@core/models/models';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	userData: any; // Save logged in user data

	constructor(
		public afs: AngularFirestore, // Inject Firestore service
		public afAuth: AngularFireAuth, // Inject Firebase auth service
		public router: Router
	) {
		/* Saving user data in localstorage when 
    logged in and setting up null when logged out */
		this.afAuth.authState.subscribe((user): void => {
			if (user) {
				this.userData = user;
				localStorage.setItem('user', JSON.stringify(this.userData));
				JSON.parse(localStorage.getItem('user'));
			} else {
				localStorage.setItem('user', null);
				JSON.parse(localStorage.getItem('user'));
			}
		});
	}

	// Sign in with email/password
	signIn(email, password) {
		return this.afAuth
			.signInWithEmailAndPassword(email, password)
			.then((result): void => {
				this.router.navigate(['/form']);
				this.setUserData(result.user);
			})
			.catch((error): void => {
				window.alert(error.message);
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
