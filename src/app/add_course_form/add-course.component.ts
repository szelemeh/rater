import { Component, Input, ViewChild, ElementRef, Output, EventEmitter} from '@angular/core'
import { Course } from '../models/Course'
import { ClassForm } from '../models/Course'

@Component({
    selector: 'app-add-course-form',
    templateUrl: './add-course.component.html',
    styleUrls: [
        '../../assets/bootstrap/css/bootstrap.min.css',
        '../../assets/styles.css']
})
export class AddCourseComponent {
    course =
    {
        'id': null,
        'courseName': null,
        'numberOfEtcs': null,
        'semester': null,
        'classForm': null,
        'maxStudentNumber': null,
        'rate': null,
        'imagePath' : null,
        'description': null
    }
    classFormOptions = ["EXERCISE", "LAB", "LECTURE", "PROJECT"]
    onSubmit() {
        console.log(this.course);
        
    }
}