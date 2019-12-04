import { Component, OnInit} from '@angular/core'
import {CourseService} from '../services/course.service'
import { Course } from '../models/Course'

@Component ({
    selector: 'app-course-list',
    templateUrl: './app.course-list.html',
    styleUrls: [
        '../../assets/bootstrap/css/bootstrap.min.css',
        '../../assets/styles.css'
    ],
    providers: [CourseService]
})

export class CourseListComponent implements OnInit {
    private courses: Course[]
    ngOnInit(): void {
        this.getCourses();
    }
    constructor(private service: CourseService) { }
    
    getCourses(): void {
        this.courses = this.service.getCourses();
    }

    removeCourseFromList(courseToDelete: Course): void {

        this.courses.forEach(function(course,index,all) {
            if(courseToDelete.id == course.id)all.splice(index, 1);
        }); 
    } 
}