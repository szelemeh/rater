import { Component, ViewChild, ElementRef, OnChanges, OnInit, AfterViewInit } from '@angular/core';
import { CourseService } from '../services/course.service';
import { Course } from '../models/Course';
import { CourseFilterService } from '../services/course-filter.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: [ 
      '../../assets/bootstrap/css/bootstrap.min.css',
      '../../assets/styles.css']
})
export class SearchComponent implements OnInit{
    @ViewChild('toggleBtn', {static: false}) toggle: ElementRef;
    private showMoreOptions = false;
    private courses: Course[];
    private searchText: string;
    private searchRates: boolean[] = [];
    private searchSemesters: boolean[] = [];
    
    
    ngOnInit(): void {
        this.courseService.updateAll();
    }

    constructor(private courseService: CourseService, private filterService: CourseFilterService) { }

    getCourses(): void {
        this.courseService.currentCourses.subscribe(courses => this.courses = courses);
        this.filterService.currentSearchText.subscribe(searchText => this.searchText = searchText);
    }

    updateSearchText() {
        this.filterService.changeSearchText(this.searchText);
    }

    onToggle(event: Event) {
        if(this.showMoreOptions){
            this.toggle.nativeElement.className = "glyphicon glyphicon-chevron-down"
            this.showMoreOptions = !this.showMoreOptions;
        }
        else {
            this.toggle.nativeElement.className = "glyphicon glyphicon-chevron-up"
            this.showMoreOptions = !this.showMoreOptions;
        }   
    }

    updateRate(i: number) {
        console.log(this.searchRates[i]);
        
        this.searchRates[i] = !this.searchRates[i];
    }

    onSearch() {
        console.log("click");
        this.filterService.changeSearchRates(this.searchRates);
        this.searchRates = [];
    }


}
