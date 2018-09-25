import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'clone',
  pure: false
})
export class ClonePipe implements PipeTransform {

  transform(value: any): string {
    return JSON.stringify(value)
  }

}
