import { Component, Input, ViewChild, ElementRef, Output, EventEmitter} from '@angular/core'
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Course, ClassForm } from '../models/Course'
import { CourseService } from '../services/course.service'


@Component({
    selector: 'app-add-course-form',
    templateUrl: './add-course.component.html',
    styleUrls: [
        '../../assets/bootstrap/css/bootstrap.min.css',
        '../../assets/styles.css']
})
export class AddCourseComponent {
    form: FormGroup;
    course: Course = {
        id: null,
        courseName: null,
        numberOfEtcs: null,
        semester: null,
        classForm: null,
        maxStudentNumber: null,
        rate: null,
        imagePath: null,
        description: null
    };
    
    constructor(private coursesService: CourseService) {
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
            ),
            logo:    new FormControl(
                "", [
                    Validators.required,
                    Validators.pattern("^(http[s]?:\\/\\/(www\\.)?|ftp:\\/\\/(www\\.)?|www\\.){1}([0-9A-Za-z-\\.@:%_\+~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.)*)?(\\?(.)*)?")
                ]
            )
        });
    }

    onSubmit() {
        if(this.form.valid){
            this.fillOutCourse();
            this.coursesService.addCourse(this.course);
            this.emptyCourse();
        }
    }

    fillOutCourse() {
        this.course.id = new Date().getTime();
        this.course.courseName=this.form.controls.courseName.value;
        this.course.numberOfEtcs = this.form.controls.etcs.value;
        this.course.semester = this.form.controls.semester.value;
        this.course.classForm = this.form.controls.classForm.value;
        this.course.maxStudentNumber = this.form.controls.capacity.value;
        this.course.imagePath = this.form.controls.logo.value;
        this.course.description = this.form.controls.courseDescr.value;
    }

    emptyCourse() {
        this.course = {
            id: null,
            courseName: null,
            numberOfEtcs: null,
            semester: null,
            classForm: null,
            maxStudentNumber: null,
            rate: null,
            imagePath: null,
            description: null
        };
    }
}