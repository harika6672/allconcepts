import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appCommon]'
})
export class CommonDirective {

  @HostBinding('style.backgroundColor') color:String
  @HostListener('mouseover') onMouseOver(){
    this.color="blue"
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.color="green"
  }
  constructor() { 
    this.color="yellow"
  }

}
