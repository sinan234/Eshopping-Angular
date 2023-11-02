import { Component ,DoCheck,OnInit} from '@angular/core';
import { Productservice } from '../service/products.service';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit{
  constructor(private productservice:Productservice, private http:HttpClient, private toastr:ToastrService){}
  wishlist:any;
  newwish:any;
  product_id:any;
  sno:number=0;
  display:boolean=false;
  
  // ngOnInit(){
  //   this.wishlist=this.productservice.product;
  //   console.log(this.wishlist);
  // }
  
 ngOnInit(): void {
    this.getData();
}
 
getData(){
  this.http.get('http://localhost:3000/get_wishlist').subscribe((res :any)=>{
      
  this.wishlist=Object.values(res);
  this.newwish=this.wishlist[0];
  // console.log(this.wishlist);
  if(this.wishlist[0].length==0){
    this.display=true;
  }
}),((err:any)=>{
  console.log("error");
  // console.log(err);
});
}

  add(id:number){
    const cart={product_id:id}
      this.http.post('http://localhost:3000/addToCart', cart )
      .subscribe((res:any)=>{
        console.log("added to cart");
        console.log(res);
        // this.toastr.success("Product added to cart");
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: res.message,
          showConfirmButton: false,
          timer: 1500
        })
      },(error:any)=>{
        this.display=true;
        console.log("error occurred");  
      })}
  

  remove(item:any){
    console.log(item);
    const product_id=item;
    this.http.delete('http://localhost:3000/remove_wishlist', { body: { product_id } }).subscribe((res:any)=>{
      console.log(res);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: res.message,
        showConfirmButton: false,
        timer: 1500
      })
      this.wishlist = this.wishlist.filter((wishlistItem: any) => wishlistItem.product_id !== item);
      console.log(this.wishlist[0]);
      this.getData();
    }),((err:any)=>{
      console.log(err);
    });
  }
}
