import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { AdminloginService } from './adminlogin.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {
  constructor(private authService: AdminloginService, private router: Router, private toastr:ToastrService) {}

  canActivate(){
    if (this.authService.Loggedin()) {
      return true;
    } else {
      this.toastr.warning("Please login to continue");
      this.router.navigate(['/admin/login']);
      return false;
    }
  }
}