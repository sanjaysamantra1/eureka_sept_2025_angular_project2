import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordinal'
})
export class OrdinalPipe implements PipeTransform {

  transform(num: number): string {
    let rem = num % 10;
    let res = '';
    if (rem === 1) {
      res = num + ' st';
    } else if (rem === 2) {
      res = num + ' nd';
    } else if (rem === 3) {
      res = num + ' rd';
    } else {
      res = num + ' th'
    }
    return res;
  }

}
