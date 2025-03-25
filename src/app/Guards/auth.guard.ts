import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { MasterService } from '../service/master.service';

export const authGuard: CanActivateFn = (route, state) => {
  let router = inject(Router);
  let service = inject(MasterService);

  
  if (service.isLoggedIn()) {
    return true;
  } else {
    alert('Unauthorized Access');
    router.navigate(['/login']); 
    return false;
  }
};
