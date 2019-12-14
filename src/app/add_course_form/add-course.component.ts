import { Component, Input, ViewChild, ElementRef, Output, EventEmitter} from '@angular/core'
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Course } from '../models/Course'


@Component({
    selector: 'app-add-course-form',
    templateUrl: './add-course.component.html',
    styleUrls: [
        '../../assets/bootstrap/css/bootstrap.min.css',
        '../../assets/styles.css']
})
export class AddCourseComponent {
    form: FormGroup;
    course: Course;
    
    constructor() {
        this.form = new FormGroup({
            courseName: new FormControl(
                "", [
                    Validators.required,
                    Validators.minLength(5)    
                ]
            ),
            courseDescr: new FormControl(
                "", [
                    Validators.required,
                    Validators.minLength(30)
                ]
            ),
            etcs:        new FormControl(
                "", [
                    Validators.required,
                    Validators.min(0),
                    Validators.max(15)
                ]
            ),
            semester:    new FormControl(
                "", [
                    Validators.required,
                    Validators.min(1),
                    Validators.max(10)
                ]
            ),
            classForm: new FormControl(
                "", [
                    Validators.required
                    ]
            ),
            capacity:    new FormControl(
                "", [
                    Validators.required,
                    Validators.min(30),
                    Validators.max(300)
                ]
            )
        });
    }

    onSubmit() {
        console.log("model-based form submitted");
        console.log(this.form);
    }
}