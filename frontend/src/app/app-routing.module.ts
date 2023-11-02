import { NgModule } from '@angular/core';
import { BodyComponent } from './body/body.component';
import { ProductComponent } from './product/product.component';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { SignupComponent } from './signup/signup.component';
import { LoggedinService } from './service/loggedin.service';
import { LoginComponent } from './login/login.component';
import { Sample1Component } from './sample1/sample1.component';
import { AuthGuard } from './service/auth.guard';
import { TestComponent } from './test/test.component';
import { LoaderComponent } from './loader/loader.component';

const appRoute: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: BodyComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'login/products',
    component: ProductComponent,
    canActivate: [AuthGuard],
  },
  { path: 'contact', component: ContactComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },

  { path: 'login/sample', component: Sample1Component },
  { path: 'loader', component: LoaderComponent },
  { path: 'test', component: Sample1Component },
  {
    path: 'admin',
    loadChildren: () => import('./admin.module').then((m) => m.AdminModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoute, { preloadingStrategy: PreloadAllModules, initialNavigation: 'enabledBlocking' })],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule {}
