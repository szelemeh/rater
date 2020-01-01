import { Component, OnInit, AfterViewInit, OnChanges, ChangeDetectorRef} from '@angular/core'
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

export class CourseListComponent implements OnInit, OnChanges{
    private courses: Course[];
    private searchText: string;
    private searchRates: boolean[];
    private searchSemesters: boolean[];
    private searchEtcss: boolean[];

    constructor (private service: CourseService, private filterService: CourseFilterService) {}

    ngOnInit(): void {
        this.subscribeAttrsToExternal();
    }

    ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
        
    }    
    subscribeAttrsToExternal(): void {
        this.service.currentCourses.subscribe(courses => this.courses = courses);
        this.filterService.currentSearchText.subscribe(searchText => this.searchText = searchText);
        this.filterService.currentSearchRates.subscribe(searchRates => this.searchRates = searchRates);
        this.filterService.currentSearchSemesters.subscribe(searchSemesters => this.searchSemesters = searchSemesters);
        this.filterService.currentSearchEtcss.subscribe(searchEtcss => this.searchEtcss = searchEtcss);
    }

    removeCourseFromList(courseToRemove: Course): void {
        this.courses.forEach(

            function(course,index,all) {
                
                if(courseToRemove.id == course.id)all.splice(index, 1);
            }

        ); 
    } 
}