import { Pipe, PipeTransform } from '@angular/core';
import { Course } from 'src/app/models/Course';

@Pipe({
  name: 'nameSearch'
})
export class NameSearchPipe implements PipeTransform {

  transform(courses: Course[], searchText: string): Course[] {
    if(!courses) {
      return [];
    }

    if(!searchText) {
      return courses;
    }
    searchText = searchText.toLowerCase();
    return courses.filter(course => {
      return course.courseName.toLowerCase().includes(searchText);
    });
  }

}
