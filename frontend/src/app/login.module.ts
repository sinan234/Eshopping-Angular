import { NgModule } from '@angular/core';
import { DetailsComponent } from './details/details.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { SuccessComponent } from './success/success.component';
import { OrdersComponent } from './orders/orders.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CommonModule } from "@angular/common";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login.router.module';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { SimilarModule } from './common.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ProductdetailsComponent,
    WishlistComponent,
    DetailsComponent,
    OrdersComponent,
    SuccessComponent,
    CheckoutComponent

  ],
  imports: [
    LoginRoutingModule,
    CommonModule,
    BrowserModule,
    FormsModule,
    SimilarModule
   
  ],
})
export class LoginModule {}
