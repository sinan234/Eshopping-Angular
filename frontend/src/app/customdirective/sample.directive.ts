import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSample]'
})
export class SampleDirective {

  constructor(private element:ElementRef , private renderer:Renderer2) {

   }
      @HostListener('mouseenter') mouseenter(){
      this.renderer.setStyle(this.element.nativeElement , 'backgroundColor' ,'#93AD00	')     
      }
      @HostListener('mouseleave') mouseleave(){
        this.renderer.setStyle(this.element.nativeElement , 'backgroundColor' ,'#FFFFF	')     

      }

}
