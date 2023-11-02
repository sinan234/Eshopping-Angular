import { RouterModule, Routes } from "@angular/router";
import { NgModule } from '@angular/core';
import { AuthGuard } from "./service/auth.guard";
import { ProductdetailsComponent } from "./productdetails/productdetails.component";
import { WishlistComponent } from "./wishlist/wishlist.component";
import { CheckoutComponent } from "./checkout/checkout.component";
import { DetailsComponent } from "./details/details.component";
import { OrdersComponent } from "./orders/orders.component";
import { SuccessComponent } from "./success/success.component";


const loginRoute:Routes=[
   
    { path: 'login/products/buy/:id', component: ProductdetailsComponent },
    {
        path: 'login/wishlist',
        component: WishlistComponent,
        canActivate: [AuthGuard],
      },
     {
      path:'login/cart',
      component:ProductdetailsComponent,
      canActivate:[AuthGuard]
     },
      {
        path: 'login/products/details/:id',
        component: DetailsComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'login/cart/checkout',
        component: CheckoutComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'login/orders',
        component: OrdersComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'login/products/buy/:id/checkout',
        component: CheckoutComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'login/products/buy/checkout/success',
        component: SuccessComponent,
        canActivate: [AuthGuard],
      },

]

@NgModule({
  imports:[RouterModule.forChild(loginRoute)],
  exports:[RouterModule],
  providers:[AuthGuard]
})

export class LoginRoutingModule{}