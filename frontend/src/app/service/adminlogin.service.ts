import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminloginService {

  constructor() { }
  
  isloggedin:any;
  
  Loggedin(){
     return this.isloggedin; 
  }
    
    
}
