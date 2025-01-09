import { inject } from '@angular/core';
import { CanActivateChildFn, Router } from '@angular/router';

export const childauthGuard: CanActivateChildFn = (childRoute, state) => {

  let router = inject (Router);
  
  alert('Child Authentication Activated for this link, Please refer to admin tto get proper permission to view this page');
  router.navigate(['contact'])
  return false;
};
