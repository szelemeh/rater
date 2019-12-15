import { Injectable } from '@angular/core'
import { Course } from '../models/Course'
import { MockCourseData } from '../mock/mock-course-data'
import { BehaviorSubject } from 'rxjs'

@Injectable({
    providedIn: 'root'
})

export class CourseService {
    private courses: Course[] = MockCourseData.Courses;
    private coursesSource = new BehaviorSubject<Array<Course>>(this.courses);
    currentCourses = this.coursesSource.asObservable();
    getCourses() {
        return this.courses;
    }

    addCourse(course: Course) {
        this.courses.push(course);
        this.coursesSource.next(this.courses);
    }
  }