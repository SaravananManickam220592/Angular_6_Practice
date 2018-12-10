import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {
  transform(value: any, noOfLetters?: any, noOfLetterFromBack?:any): any {
    var splitStr = value.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
      var tempString="";
      for(var j=0;j<noOfLetters;j++){
        tempString += splitStr[i].charAt(j).toUpperCase();
      }
      splitStr[i] = tempString + splitStr[i].substring(noOfLetters);
    }
    return splitStr.join(' ');
  }
}
