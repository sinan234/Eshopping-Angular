import { Directive,Input , TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appIfcase]'
})
export class IfcaseDirective {

  constructor(private template:TemplateRef<any>, private viewcontainer: ViewContainerRef) { }
  
  @Input('appIfcase') set displayView(condition: boolean){
       if(condition){
        this.viewcontainer.createEmbeddedView(this.template); 


       }
       else{
        this.viewcontainer.clear(); 

       }
  }
}
