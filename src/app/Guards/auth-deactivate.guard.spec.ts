import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { authDeactivateGuard } from './auth-deactivate.guard';

describe('authDeactivateGuard', () => {
  const executeGuard: CanDeactivateFn<unknown> = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authDeactivateGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
