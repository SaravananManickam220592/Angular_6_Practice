import { Directive , HostListener, ElementRef , Input} from '@angular/core';

@Directive({
  selector: '[appPhone]'
})
export class PhoneDirective {

  @Input('format') format;

  constructor(private element:ElementRef) { }

  @HostListener('blur') onblur(){
    let value:string=this.element.nativeElement.value;
    if(this.format == 'upperCase')
      this.element.nativeElement.value=value.toUpperCase();
    else
      this.element.nativeElement.value=value.toLowerCase();
  }
}
