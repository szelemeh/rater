import { Injectable, OnInit } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import { CourseService } from './course.service';

@Injectable({
    providedIn: 'root'
})

export class CourseFilterService {
    private searchTextSourse = new BehaviorSubject<string>("");
    currentSearchText = this.searchTextSourse.asObservable();

    constructor(private courseService: CourseService){}

    private searchRatesSourse = new BehaviorSubject<boolean[]>(this.courseService.getPresentRates());
    currentSearchRates = this.searchRatesSourse.asObservable();

    private searchSemestersSourse = new BehaviorSubject<boolean[]>(this.courseService.getPresentSemesters());
    currentSearchSemesters = this.searchSemestersSourse.asObservable();

    public changeSearchText(searchText: string) {
        this.searchTextSourse.next(searchText);
    }
    
    public changeSearchRates(searchRates: boolean[]) {
        this.searchRatesSourse.next(searchRates);
    }

    public changeSearchSemesters(searchSemesters: boolean[]) {
        this.searchSemestersSourse.next(searchSemesters);
    }

  }