import { Directive,ElementRef, HostListener, Renderer2 , HostBinding} from '@angular/core';

@Directive({
  selector: '[appClickevent]'
})
export class ClickeventDirective {

  constructor(private element:ElementRef, private renderer:Renderer2) { }
  
  @HostListener('mouseenter') onmouseenter(){
     this.renderer.setStyle(this.element.nativeElement,'backgroundColor','cyan');
     this.renderer.setStyle(this.element.nativeElement,'transition','0.6s');
  }

  @HostListener('mouseout') onmouseleave(){
    this.renderer.setStyle(this.element.nativeElement,'backgroundColor','transparent');
    this.renderer.setStyle(this.element.nativeElement,'transition','0.6s');
 }

 @HostBinding('style.font-weight') fontweight:string='bold';
  
}

