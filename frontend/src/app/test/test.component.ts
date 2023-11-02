import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component,Input, EventEmitter ,Output} from '@angular/core';
import { OnInit } from '@angular/core';
import { SpecialeventService } from '../service/specialevent.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  @Input() text:string=''

  specialevents=[];
  
  // @Output()
  // emitsearch :EventEmitter <string>=new EventEmitter<string>();
  onsubmit(inputEl:HTMLInputElement){
    // this.emitsearch.emit(this.text);
    this.text=inputEl.value;
    console.log(this.text)
  }

  constructor(private http: HttpClient,private route:Router, private service:SpecialeventService) { }
  ngOnInit() {
    this.service.getEvent()
    .subscribe(
      res=>{this.specialevents=Object.values(res),
      console.log(this.specialevents)},
      err=>{
        if(err instanceof HttpErrorResponse){
          if(err.status===401){
            this.route.navigate(['/login'])
          }
          
        }
      }
    )
  }

}
