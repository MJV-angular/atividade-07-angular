import {
  ActivatedRouteSnapshot,
  CanActivateChildFn,
  CanActivateFn,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
export const AuthGuard: CanActivateFn = (
  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const router = inject(Router);
  const token = window.localStorage.getItem('@TOKEN');
  if (token) {
    return true;
  }
  router.navigate(['/login']);
  return false;
};
