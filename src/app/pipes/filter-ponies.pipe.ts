import { Pipe, PipeTransform } from '@angular/core';
import { Poney } from '../interfaces/poney';

@Pipe({
  name: 'filterPonies'
})
export class FilterPoniesPipe implements PipeTransform {

  transform(ponies: Poney[], poneyIds: number[]): Poney[] {
    return ponies.filter(poney => poneyIds.includes(poney.id))
  }

}
