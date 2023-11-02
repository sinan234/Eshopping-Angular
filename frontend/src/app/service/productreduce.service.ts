import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductreduceService {
  products:any[]=[];
  constructor(private http:HttpClient) { }

  updatedProducts(products:any[]){
     this.products=products;
     return this.products;
  }

  sendRequest(){
    if(this.products.length==0){
       console.log("no products to reduce quantity")
       return;
    }
    this.http.put('http://localhost:3000/admin/reducequantity', this.products)
    .subscribe((res:any)=>{
       console.log(res)
    }, (err:any)=>{
        console.log("Error occured", err)
    });
  }
}
