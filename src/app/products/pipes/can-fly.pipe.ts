import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: 'canFly',
})
export class CanFlyPipe implements PipeTransform {
  transform(value: boolean): 'Puede volar' | 'No puede volar' {
    if (value) {
      return 'Puede volar';
    } else {
      return 'No puede volar';
    }
  }
}
