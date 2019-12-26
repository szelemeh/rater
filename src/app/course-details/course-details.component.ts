import { Component, OnInit } from '@angular/core';
import { Course } from '../models/Course';

@Component({
    selector: 'app-course-details',
    templateUrl: './course-details.component.html',
    styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
    
    private course: Course;
    
    constructor() { }
  
    ngOnInit() {
        
    }

}
