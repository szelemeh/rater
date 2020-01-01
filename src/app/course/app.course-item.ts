import { Component, Input, ViewChild, ElementRef, Output, EventEmitter} from '@angular/core'

import { Course } from '../models/Course'
import { Router } from '@angular/router';


@Component({
    selector: 'app-course-item',
    templateUrl: './app.course-item.html',
    styleUrls: [
        '../../assets/bootstrap/css/bootstrap.min.css',
        '../../assets/styles.css']
})
export class CourseItemComponent {
    @ViewChild('card', {static: false}) card: ElementRef;
    @Input() course: Course;
    isCollapsed = true;
    @Output() removeCourse = new EventEmitter<Course>();

    constructor(private router: Router) {}

    remove() {
        this.removeCourse.emit(this.course);
    }

    goToDetails() {
        this.router.navigate(['course_details', this.course.id]);
    }
    
}