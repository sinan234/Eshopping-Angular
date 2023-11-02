import { Component, OnInit, signal } from '@angular/core';
import { Onenrollservice } from '../service/buy.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, interval } from 'rxjs';
import { Observable } from 'rxjs';
import { filter } from 'rxjs';
import { FormGroup, FormControl,Validators ,FormBuilder} from '@angular/forms';
import {Signal} from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment } from '../store-ngrx/counter.actions';
import { HttpClient } from '@angular/common/http';
import { doublecount, selectcount } from '../store-ngrx/counter.selector';
@Component({
  selector: 'app-sample1',
  templateUrl: './sample1.component.html',
  styleUrls: ['./sample1.component.css']
})
export class Sample1Component implements OnInit  {
  

  title:string='Javascript';
  userToken: string='';
  user: any;
  sub:any;
  value=signal(0);
  count$: Observable<number> = new Observable<number>();
  dcount$: Observable<number> = new Observable<number>();


  onEnroll(){
    const enroll=new Onenrollservice();
    enroll.onEnroll(this.title);
  }
  


  constructor(
   private store:Store<{
    counter:number
   }>,private http:HttpClient){
    this.count$= store.select(selectcount);
    this.dcount$=store.select(doublecount);
   }



  signupForm:any;

  increment(){
        // this.value.update((o)=>o+1)
        this.store.dispatch(increment({valueg:5}))
   }
  decrement(){
    this.store.dispatch(decrement({valuen:5}))
    // this.value.update((o)=>o-1)
}
  ngOnInit(): void {
      this.signupForm=new FormGroup({
         'fname': new FormControl(null,[Validators.required,Validators.minLength(3)]),
         'lname': new FormControl(null,[Validators.required,Validators.minLength(3)]),
      });

    // const myObservable = Observable.create((observer:any) => {
    //   let count = 0;
    
    //   setInterval(() => {
    //     observer.next(count);
    //     count++;
    //     if(count==4){
    //       observer.complete();
    //     }
    //     if(count>5){
    //       observer.error(new Error("Count greater than 5"))
    //     }
    //   });
    //   }, 1000);

    // this.sub=myObservable.pipe(filter((data:any)=>
    // {return data >0;})).subscribe((data:any)=>{
    //   console.log(data)
    // },(err:any)=>{
    //   console.log("error occured" , err)
    // },()=>{
    //   console.log("completed")
    // })
  }
  onsubmit(){
    console.log(this.signupForm.value);
  }
}


