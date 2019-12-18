import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'etcsSearch'
})
export class EtcsSearchPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
