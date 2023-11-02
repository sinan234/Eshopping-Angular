import { Component } from '@angular/core';
import { Onenrollservice } from '../service/buy.service';

@Component({
  selector: 'app-sample2',
  templateUrl: './sample2.component.html',
  styleUrls: ['./sample2.component.css'],
  providers:[Onenrollservice]
})
export class Sample2Component {
  title:string=' Angular '
  constructor(private enroll:Onenrollservice){

  }

  onEnrolld(){
    // const enroll=new Onenrollservice();
    this.enroll.onEnroll(this.title);
  }
}
