import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-adminpayment',
  templateUrl: './adminpayment.component.html',
  styleUrls: ['./adminpayment.component.css']
})
export class AdminpaymentComponent implements OnInit{
  payment:any[]=[];
 time=new Date()
  day=this.time.getDate();
  month=this.time.getMonth();
  year=this.time.getFullYear();
    constructor(private http:HttpClient, private toastr:ToastrService, private router:Router){}
    ngOnInit(): void {
      this.http.get('http://localhost:3000/admin/getpaymentdetails')
      .subscribe((res:any)=>{
        this.payment=res.payment;
        console.log(this.payment)
      },(err:any)=>{
        console.log("error occured" , err)
      })
    }

    logout(){
      this.toastr.success("Logout successful");
      localStorage.removeItem('admintoken')
      this.router.navigate(['admin','login'])
    }
}
