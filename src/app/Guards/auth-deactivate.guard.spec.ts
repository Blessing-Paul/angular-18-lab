import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { authDeactivateGuard } from './auth-deactivate.guard';
import { Component } from '@angular/core';
import { CustomerComponent } from '../pages/customer/customer.component';

describe('authDeactivateGuard', () => {
  const executeGuard: CanDeactivateFn<CustomerComponent> = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authDeactivateGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
