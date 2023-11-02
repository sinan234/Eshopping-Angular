import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsernameService {

  constructor() { }
  username:string='';
  setUserName(username:string){
    this.username=username;
  }

  getUserName(){
    return this.username;
  }
}
