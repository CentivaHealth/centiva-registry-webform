import { TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { AngularFirestore } from '@angular/fire/firestore';
import { UserService } from '@core/services/user/user.service';

describe('UserService', () => {
	let service: UserService;
	let afs: any;

	beforeEach(() => {
		afs = jasmine.createSpyObj('AngularFirestore', ['doc']);
		TestBed.configureTestingModule({
			imports: [RouterTestingModule],
			providers: [UserService, { provide: AngularFirestore, useValue: afs }]
		});
		service = TestBed.inject(UserService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
