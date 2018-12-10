import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCapitalizeword]'
})
export class CapitalizewordDirective {

  constructor(private element:ElementRef) { }

  @HostListener('blur') 
  onBlur(){
    var value:string=this.element.nativeElement.value;
    var capitalValue=value.toUpperCase();
    this.element.nativeElement.value=capitalValue;
  }

}
