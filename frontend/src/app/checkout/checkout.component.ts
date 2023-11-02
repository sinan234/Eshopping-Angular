import { HttpClient } from '@angular/common/http';
import { Component , OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';

declare var Razorpay:any;
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  cookieValue:any;
  amount:any;
  orders:any;
  display:boolean=false;
  constructor(private http:HttpClient, private route:ActivatedRoute, private router:Router) { }


    ngOnInit(): void {
      this.route.queryParams.subscribe((params) => {
        // const userToken = params['userToken'];  
        // this.cookieValue = JSON.parse(userToken);
       
        this.amount = params['amount'];
        this.orders = JSON.parse(params['products']);
        console.log("amount",this.amount);
        console.log("products",this.orders);
        const Razorpayoptions={
          description:"Sample Payment",
          currency:"INR",
          amount:this.amount*100,
          name:'test',
          image:'https://cdn.razorpay.com/logos/7K3b6d18wHwKzL_medium.png',
          'key':environment.key,
          prefill:{
            name:'test',
            email:'test@gmail.com',
            'phone':'9998887775 '
          },
          theme:{
            color:"#6466e3",
            display:"block",
          },handler: async(response: any) => {
            console.log('payment_id', response.razorpay_payment_id);
            const paymentId = response.razorpay_payment_id;
            
             const data = {
              paymentId: paymentId,
              amount: this.amount,
              products: this.orders,
              
            };
            console.log(data);
            await this.http.post('http://localhost:3000/payment', data).subscribe((res) => {
                console.log(res);
                console.log('Payment Successful');
                 this.display=true;
                 this.router.navigate(['login','products', 'buy', 'checkout','success'], {queryParams:{
                    amount:this.amount,
                    products:this.orders,
                    paymentId:paymentId 
                
                }
                 });
                 console.log("display",this.display); 

          },(error: any) => {
                console.log(error);
                console.log('Payment Failed');
          });
          },

    
          modal:{
            ondismiss:()=>{
              alert('Payment Failed');
            } 
          },
        }
        const successCallback = (payment_id:any)=>{
            console.log('payment_id',payment_id);
        }
        const failureCallback = (error:any)=>{
            console.log('error',error);
        }
        Razorpay.open(Razorpayoptions, successCallback, failureCallback)
      });
    }
}
