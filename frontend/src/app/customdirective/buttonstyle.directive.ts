import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appButtonstyle]'
})
export class ButtonstyleDirective {

  constructor(private element:ElementRef, private renderer:Renderer2) { }

  @Input() set appButtonstyle(condition:boolean){
    this.renderer.addClass(this.element.nativeElement,'btn');
}

}
