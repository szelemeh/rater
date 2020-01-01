import { Injectable, OnInit } from '@angular/core'
import { Course } from '../models/Course'
import { MockCourseData } from '../mock/mock-course-data'
import { BehaviorSubject, Observable, of } from 'rxjs'

@Injectable({
    providedIn: 'root'
})

export class CourseService{
    private courses: Course[] = MockCourseData.Courses;
    private coursesSource = new BehaviorSubject<Array<Course>>(this.courses);
    private rates: boolean[] = [false, false, false, false, false, false];
    private semesters: boolean[] = [false, false, true, false, false, false, false, false, false, false];
    private etcss: boolean[] = [false, false, false, false, false, false, false];
    
    currentCourses = this.coursesSource.asObservable();

    constructor() {
        this.updateAll();
    }

    public addCourse(course: Course) {
        this.courses.push(course);
        this.coursesSource.next(this.courses);
        this.updateAll();
    }

    removeCourse(courseToRemove: Course): void {
        this.courses.forEach(

            function(course,index,all) {
                
                if(courseToRemove.id == course.id)all.splice(index, 1);
            }

        ); 

        this.coursesSource.next(this.courses);
        this.updateAll();
        console.log('Deleted: ' + courseToRemove.courseName);
        
    }

    getPresentRates(): boolean[] {
        return this.rates;   
    }
    getPresentSemesters(): boolean[] {
        return this.semesters;
    }
    getPresentEtcss(): boolean[] {
        return this.etcss;
    }

    public updateAll() {
        for(let i=0; i<this.courses.length; i++){
            this.doUpdate(this.courses[i]);
        }
    }

    private doUpdate(course: Course) {
        this.rates[Math.floor(course.rate)] = true;
        this.semesters[course.semester-1] = true;
        this.etcss[course.numberOfEtcs] = true;
    }

    getCourse(id: number): Observable<Course> {
        return of(this.courses.find(course => course.id === id));
    }
  }