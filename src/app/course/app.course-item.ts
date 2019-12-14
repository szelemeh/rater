import { Component, Input, ViewChild, ElementRef, Output, EventEmitter} from '@angular/core'

import { Course } from '../models/Course'


@Component({
    selector: 'app-course-item',
    templateUrl: './app.course-item.html',
    styleUrls: [
        '../../assets/bootstrap/css/bootstrap.min.css',
        '../../assets/styles.css']
})
export class CourseItemComponent {
    @ViewChild('card', {static: false}) card: ElementRef;
    @ViewChild('ratemessage', {static: false}) rateMessage: ElementRef;
    @Input() course: Course;
    isCollapsed = true;
    @Output() removeCourse = new EventEmitter<Course>();

    remove() {
        this.removeCourse.emit(this.course);
    }

    changeState(){
        if(this.isCollapsed){
            setTimeout(() => {
                this.card.nativeElement.classList.remove('collapse');
            }, 100);
            
            this.isCollapsed = false
        }
        else {
            setTimeout(() => {
                this.card.nativeElement.classList.add('collapse');
            }, 100);
            this.isCollapsed = true;
        }
        
    }

    changeRateMessage() {
        this.rateMessage.nativeElement.innerHTML = "Your rate: ";
    }
    addNewRate(newRate: number) {
        //implement the function
    }

    
}