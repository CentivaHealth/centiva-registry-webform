import { TestBed } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import {AuthService} from '@core/services/auth/auth.service';
import { RouterTestingModule } from '@angular/router/testing';


describe('AuthGuard', () => {
  let guard: AuthGuard;
  const authService: AuthService = jasmine.createSpyObj('AuthService', ['']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        AuthGuard,
        { provide: AuthService, useValue: authService }
      ]
    });
    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
