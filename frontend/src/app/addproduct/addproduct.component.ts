import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent {

  constructor(private http:HttpClient, private toastr:ToastrService, private router:Router){}
  Product_ID:string='';
  Product_Name:string='';
  Product_Category:string='';
  Quantity:string='';
  product_description:string='';
  Product_Discount:string='';
  Product_Price:string=''
  Product_Availability:string='';
  Image_Path: string='';

  
  onsubmit(form:any){
    console.log(form.value)
     const data={
        Product_Id:form.value.Product_ID,
        Product_Name:form.value.Product_Name,
        Product_Category:form.value.Product_Category,
        Product_Quantity:form.value.Quantity,
        Product_Description:form.value.product_description,
        Product_Discount:form.value.Product_Discount,
        Product_Availbility:form.value.Product_Availability,
        Product_Price:form.value.Product_Price,
        Product_Image:form.value.Image_Path,
     }
     this.http.post("http://localhost:3000/admin/createproduct", data)
     .subscribe((res:any)=>{
          console.log("response from server",res)
          if(res){
              this.toastr.success("Product added successfully");
              this.router.navigate(['admin','login','home'])
          }
          form.reset();
     }, (err: any)=>{
          console.log("error occured", err)
     })
  }
}
