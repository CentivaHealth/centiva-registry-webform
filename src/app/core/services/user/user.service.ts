import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { UserModel } from '@core/models/user.model';
import { take } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class UserService {
	private angularFirestore: AngularFirestore;

	constructor(angularFirestore: AngularFirestore) {
		this.angularFirestore = angularFirestore;
	}

	public getByEmail(email: string) {
		return this.angularFirestore
			.collection<UserModel>('User', (ref) =>
				ref.where('email', '==', email).limit(1)
			)
			.valueChanges()
			.pipe(
				take(1) // Here you can limit to only emit once, using the take operator
			)
			.toPromise()
			.then((users) => {
				if (users.length === 0) {
					return null;
				}
				return users[0];
			});
	}
}
