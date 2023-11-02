import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {
  slides = [
    { name: 'Product 1', image: 'https://www.amazon.in/dp/B09G9BL5CP/ref=asc_df_B09G9BL5CP/?source=ps-sl-shoppingads-lpcontext' },
    { name: 'Product 3', image: 'https://www.google.com/aclk?sa=l&ai=DChcSEwj2pr37rvKBAxUPCoMDHcCNDzoYABADGgJzZg&ase=2&gclid=Cj0KCQjwsp6pBhCfARIsAD3GZubCHKE_Fjvpf5Lg-OZMP9bYsAnDn6723cx4igtjfhUue-55VsDxf7caAombEALw_wcB&sig=AOD64_2ostGh1vwLYH5YKRdU9u2-b080xg&ctype=5&nis=5&adurl&ved=2ahUKEwiKs6_7rvKBAxXs7DgGHcSWAGUQwg96BAgBEDo' },
    { name: 'Product 3', image: 'https://www.amazon.in/Air-Buds-Generation-Wireless-Charging-Cable/dp/B0CH5DY41M?source=ps-sl-shoppingads-lpcontext&ref_=fplfs&psc=1&smid=A1AYO5GIJORNQ0' }
  ];
}
