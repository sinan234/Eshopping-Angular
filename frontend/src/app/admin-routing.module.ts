import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { AdminAuthGuard } from './service/adminauth.guard';
import { EditproductsComponent } from './editproducts/editproducts.component';
import { AdminpaymentComponent } from './adminpayment/adminpayment.component';

const routes: Routes = [
  { path: 'login', component: AdminloginComponent },
  {
    path: 'login/home',
    component: AdminhomeComponent,
    canActivate: [AdminAuthGuard],
  },
  {
    path: 'login/home/addproduct',
    component: AddproductComponent,
    // canActivate: [AdminAuthGuard],
  },
  {
    path: 'login/home/editproducts',
    component: EditproductsComponent,
    canActivate: [AdminAuthGuard],
  },
  {
    path: 'login/home/paymentdetails',
    component: AdminpaymentComponent,
    canActivate: [AdminAuthGuard],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AdminAuthGuard],
})
export class AdminRoutingModule {}
