import { Pipe, PipeTransform } from '@angular/core';
import { Course } from 'src/app/models/Course';

@Pipe({
  name: 'semesterSearch'
})
export class SemesterSearchPipe implements PipeTransform {

  transform(courses: Course[], searchSemesters: boolean[]): Course[] {
    if(!courses) {
      return [];
    }

    if(!searchSemesters) {
      return courses;
    }

    if(searchSemesters.length == 0) {
      return courses;
    }

    return courses.filter(course => {
      return searchSemesters[course.semester-1];
    });
  }

}
