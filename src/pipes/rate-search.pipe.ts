import { Pipe, PipeTransform } from '@angular/core';
import { Course } from 'src/app/models/Course';

@Pipe({
  name: 'rateSearch'
})
export class RateSearchPipe implements PipeTransform {

  transform(courses: Course[], searchRates: boolean[]): Course[] {
    if(!courses) {
      return [];
    }

    if(!searchRates) {
      return courses;
    }

    if(searchRates.length == 0) {
      return courses;
    }

    return courses.filter(course => {
      return searchRates[Math.floor(course.rate)];
    });

  }

}
