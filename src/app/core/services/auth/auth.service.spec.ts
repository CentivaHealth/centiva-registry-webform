import {TestBed} from '@angular/core/testing';

import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/auth';
import {AuthService} from '@core/services/auth/auth.service';
import {RouterTestingModule} from '@angular/router/testing';
import {MessageHandlerService} from '@core/services/message-handler/message-handler.service';

describe('AuthService', (): void => {
  let service: AuthService;
  let afs: any;
  let afAuth: any;
  let messageHandlerService: any;

  beforeEach(() => {
    afs = jasmine.createSpyObj('AngularFirestore', ['doc']);
    afAuth = jasmine.createSpyObj('AngularFireAuth', ['']);
    messageHandlerService = jasmine.createSpyObj('MessageHandlerService', ['errorMessage']);
    afAuth.authState = jasmine.createSpyObj('Observable<User>', ['subscribe']);

    console.log(afs);
    console.log(afAuth);
    console.log(messageHandlerService);    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        AuthService,
        {provide: AngularFirestore, useValue: afs},
        {provide: AngularFireAuth, useValue: afAuth},
        {provide: MessageHandlerService, useValue: messageHandlerService}
      ]
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
