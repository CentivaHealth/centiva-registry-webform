import { TestBed } from '@angular/core/testing';

import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '@core/services/auth/auth.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('AuthService', (): void => {
	let service: AuthService;
	let afs: any;
	let afAuth: any;

	beforeEach(() => {
		afs = jasmine.createSpyObj('AngularFirestore', ['doc']);
		afAuth = jasmine.createSpyObj('AngularFireAuth', [
			'signInWithEmailAndPassword'
		]);
		TestBed.configureTestingModule({
			imports: [RouterTestingModule],
			providers: [
				{ provide: AngularFirestore, useValue: afs },
				{ provide: AngularFireAuth, useValue: afAuth }
			]
		});
		service = TestBed.inject(AuthService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
