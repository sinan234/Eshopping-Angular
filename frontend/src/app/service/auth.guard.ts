import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { LoggedinService } from './loggedin.service';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private loggedinService: LoggedinService, private router: Router, private toastr:ToastrService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const isLoggedIn = this.loggedinService.login();

    if (isLoggedIn) {
      return true;
    } else {
      this.toastr.warning("Please login to continue")
      this.router.navigate(['/login']);

      return false;
    }
  }
}