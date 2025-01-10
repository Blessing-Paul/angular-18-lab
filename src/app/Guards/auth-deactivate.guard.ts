import { CanDeactivateFn } from '@angular/router';
import { CustomerComponent } from '../pages/customer/customer.component';

export const authDeactivateGuard: CanDeactivateFn<CustomerComponent> = (component, currentRoute, currentState, nextState) => {
 
  return component.cannavigate();
};
