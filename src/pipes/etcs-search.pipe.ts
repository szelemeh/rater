import { Pipe, PipeTransform } from '@angular/core';
import { Course } from 'src/app/models/Course';

@Pipe({
  name: 'etcsSearch'
})
export class EtcsSearchPipe implements PipeTransform {

  transform(courses: Course[], searchEtcss: boolean[]): Course[] {
    if(!courses) {
      return [];
    }

    if(!searchEtcss) {
      return courses;
    }

    if(searchEtcss.length == 0) {
      return courses;
    }

    return courses.filter(course => {
       return searchEtcss[course.numberOfEtcs];
     });
  }
}
