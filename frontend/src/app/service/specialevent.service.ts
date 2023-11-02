import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpecialeventService {

  constructor(private http:HttpClient) { }

  getEvent(){
    return this.http.get<any>('http://localhost:3000/special');
  }
}
