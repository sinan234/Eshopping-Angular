import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-editproducts',
  templateUrl: './editproducts.component.html',
  styleUrls: ['./editproducts.component.css']
})
export class EditproductsComponent implements OnInit {
  constructor(private http:HttpClient, private toastr:ToastrService, private route:ActivatedRoute, private router:Router){}
  
  Product_Name:string='';
  Product_Id: any;
  Product_Category:string='';
  Quantity:string='';
  product_description:string='';
  Product_Discount:string='';
  Product_Price:string=''
  Product_Availability:string='';
  Image_Path: string='';  
  products:any[]=[];
  filteredproducts:any[]=[];

  ngOnInit(): void {
    this.http.get('http://localhost:3000/admin/getproducts')
      .subscribe((res: any) => {
        this.products = res;
        console.log("products from db", this.products);
  
        const Product_Id = this.route.snapshot.queryParams['Product_Id'];
        console.log("Productid", Product_Id);
  
        this.filteredproducts = this.products.filter((item) => {
          return item.Product_Id == Product_Id;
        });
        console.log("filtered products", this.filteredproducts)
        this.Product_Id= this.filteredproducts[0].Product_Id;
        this.Product_Name=this.filteredproducts[0].Product_Name;
        this.Product_Category=this.filteredproducts[0].Product_Category;
        this.Product_Price= this.filteredproducts[0].Product_Price;
        this.Product_Availability= this.filteredproducts[0].Product_Availbility;
        this.product_description=this.filteredproducts[0].Product_Description;
        this.Quantity=this.filteredproducts[0].Product_Quantity;
        this.Product_Discount=this.filteredproducts[0].Product_Discount;
        this.Image_Path=this.filteredproducts[0].Product_Image;
      }, (err: any) => {
        console.log("error from server", err);
      });
     
  }
  


  onsubmit(form:any)
{
  const data={
    Product_Id:form.value.Product_Id,
    Product_Name:form.value.Product_Name,
    Product_Category:form.value.Product_Category,
    Product_Quantity:form.value.Quantity,
    Product_Description:form.value.product_description,
    Product_Discount:form.value.Product_Discount,
    Product_Availbility:form.value.Product_Availbility,
    Product_Price:form.value.Product_Price,
    Product_Image:form.value.Image_Path,
 }
 console.log(data)
 
 this.http.put('http://localhost:3000/admin/editproduct', data)
 .subscribe((res:any)=>{
  console.log(res)
  if(res){
    this.toastr.success("Product details edited successfully");
    this.router.navigate(['admin','login','home'])
  }
 },(err:any)=>[
  console.log("error occured", err)
 ])
}}
