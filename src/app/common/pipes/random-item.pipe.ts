import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'randomItem'
})
export class RandomItemPipe implements PipeTransform {

  transform<T>(array: T[]): T {
    const {length} = array;
    if (length === 0) {
      return null;
    }
    const randomIndex = Math.floor(Math.random() * (length - 1));
    return array[randomIndex];
  }

}
