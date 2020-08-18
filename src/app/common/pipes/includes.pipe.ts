import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'includes'
})
export class IncludesPipe implements PipeTransform {

  transform<T extends any>(array: T[], item: T): boolean {
    return array.includes(item);
  }

}
