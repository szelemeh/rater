import { Component, OnInit, AfterViewInit} from '@angular/core'
import { CourseService } from '../services/course.service'
import { Course } from '../models/Course'
import { CourseFilterService } from '../services/course-filter.service';

@Component ({
    selector: 'app-course-list',
    templateUrl: './app.course-list.html',
    styleUrls: [
        '../../assets/bootstrap/css/bootstrap.min.css',
        '../../assets/styles.css'
    ],
    providers: [CourseService]
})

export class CourseListComponent implements OnInit{
    private courses: Course[];
    private searchText: string;
    private searchRates: boolean[];
    private searchSemesters: boolean[];
    private searchEtcss: boolean[];

    ngOnInit(): void {
        this.subscribeAttrsToExternal();
    }
    constructor(private service: CourseService, private filterService: CourseFilterService) { }
    
    subscribeAttrsToExternal(): void {
        this.service.currentCourses.subscribe(courses => this.courses = courses);
        this.filterService.currentSearchText.subscribe(searchText => this.searchText = searchText);
        this.filterService.currentSearchRates.subscribe(searchRates => this.searchRates = searchRates);
        this.filterService.currentSearchSemesters.subscribe(searchSemesters => this.searchSemesters = searchSemesters);
        this.filterService.currentSearchEtcss.subscribe(searchEtcss => this.searchEtcss = searchEtcss);
    }

    removeCourseFromList(courseToDelete: Course): void {
        this.courses.forEach(

            function(course,index,all) {
                if(courseToDelete.id == course.id)all.splice(index, 1);
            }

        ); 
    } 

    getCourses() : Course[] {
        return this.courses;
    }
}