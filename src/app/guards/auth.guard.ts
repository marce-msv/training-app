import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';

import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isAuth()) {
    console.log('User is authenticated');
    return true;
  } else {
    console.log('User is not authenticated');
    return router.navigate(['/login']);
  }
};
