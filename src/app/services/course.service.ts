import { Injectable } from '@angular/core'
import { Course } from '../models/Course'
import { MockCourseData } from '../mock/mock-course-data'

@Injectable({
    providedIn: 'root',
   })

export class CourseService {
    private courses: Course[] = MockCourseData.Courses;
    
    getCourses() {
        return this.courses;
    }
  }