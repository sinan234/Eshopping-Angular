import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggedinService {

  constructor() { }

  loggedin:boolean=false;
  login(){
    return !!localStorage.getItem('token');
  }
  logout(){ 
    localStorage.removeItem('token');
  }

  getToken(){
    // console.log(localStorage.getItem('token'));
    return localStorage.getItem('token');
  }
}
