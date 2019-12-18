import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'semesterSearch'
})
export class SemesterSearchPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
