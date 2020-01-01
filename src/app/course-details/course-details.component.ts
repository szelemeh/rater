import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Course } from '../models/Course';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { CourseService } from '../services/course.service';


@Component({
    selector: 'app-course-details',
    templateUrl: './course-details.component.html',
    styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
    @ViewChild('ratemessage', {static: false}) rateMessage: ElementRef;
    private course: Course = null;
    
    constructor(
        private courseService: CourseService,
        private route: ActivatedRoute,
        private location: Location,
        private router: Router
    ) { }
  
    ngOnInit(): void {
        this.getCourse();
    }
      
    getCourse(): void {
        const id = +this.route.snapshot.paramMap.get('id');
        this.courseService.getCourse(id)
            .subscribe(course => this.course = course);
        
        if (this.course == null) {
            this.router.navigate(['404'])
        }
    
    }

    changeRateMessage() {
        this.rateMessage.nativeElement.innerHTML = "Your rate: ";
    }
    addNewRate(newRate: number) {
        //implement the function
    }

}
