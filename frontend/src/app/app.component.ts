import { Component,ElementRef,ViewChild, DoCheck, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { SearchService } from './service/search.service';
import { Router ,ActivationEnd} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  constructor(private searchService: SearchService, private router:Router) {}
  public showPreloader = true;

  title = 'test';

  searchtext:string='';
  

  ngOnInit() {
    const duration = 1000;
    setTimeout(() => {
      this.showPreloader = false;
    }, duration);
  }
  onsearchtextchange(data:string){
      this.searchtext=data;
      this.searchService.setSearchValue(this.searchtext);
     
  }

  showheader:boolean=true


  // ngOnInit() {
  //   this.router.events.subscribe((event) => {
  //     if (event instanceof ActivationEnd && event.snapshot.url[0].path === 'contact') {
  //       this.showheader=false;
  //     }
      
      
  //   });

   
     
  // }

  // ngDoCheck(){
  //   this.router.events.subscribe((event) => {
  //     if (event instanceof ActivationEnd && event.snapshot.url[0].path != 'contact') {
  //       this.showheader=true;
  //     }
       
  //   });
  // }

  @ViewChild('dob') dateofbirth?: ElementRef;
  @ViewChild('age') agenew?: ElementRef;

  calculateage(){
    let birthyear=new Date(this.dateofbirth?.nativeElement.value).getFullYear();
    let curryear=new Date().getFullYear();
    let age=curryear-birthyear;
    console.log(age)
    // this.agenew?.nativeElement.value=age;
  }
}
