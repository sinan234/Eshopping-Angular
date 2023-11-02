import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminloginService } from '../service/adminlogin.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {
  constructor(private http:HttpClient,private admin:AdminloginService, private router:Router, private toastr:ToastrService,private route:ActivatedRoute) { }
  email:string='';
  password:string='';

  
onsubmit(form:any){
  console.log(form.value);
  const data={
    email:form.value.email,
    password:form.value.password
  }
  
  this.http.post('http://localhost:3000/admin/adminlogin' ,data)
  .subscribe((res:any)=>{
     console.log(res);
     if(res){
      this.toastr.success("Login successful")
      this.admin.isloggedin=true;
      localStorage.setItem('token', res.token);
    
        this.router.navigate(['home'],{
          relativeTo:this.route
        })

     

      const currentTime = new Date().getTime();
      const remainingTime = res.time - currentTime;
      setTimeout(() => {
        localStorage.removeItem('admintoken')
        this.toastr.warning('Session ended, Please login to continue')
        this.router.navigate(['admin','login']);
      },remainingTime);
     
     }
     form.reset();
  },(err:any)=>{
    this.toastr.error(err.error.message)
    console.log("error occured",err);
  })
}
}
