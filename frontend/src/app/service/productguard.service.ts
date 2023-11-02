import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from "@angular/router";
import { LoggedinService } from "./loggedin.service";

// @Injectable()
// export class Productguard implements CanActivate
// {
//     constructor(private auth:LoggedinService){}
//     // canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot):boolean{
//     //     // return this.auth.IsAuth();
//     // }
// }