import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cut'
})
export class CutPipe implements PipeTransform {

  transform<T extends any>(array: T[], limit: number): T[] {
    return array.slice(0, limit);
  }

}
