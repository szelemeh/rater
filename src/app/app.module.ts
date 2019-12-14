import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseListComponent} from './course/app.course-list';
import { CourseItemComponent} from './course/app.course-item';
import { CourseService } from './services/course.service';
import {ClickStopPropagation} from './stop-propagation'
import { RateComponent } from './rate_stars/rate.component';
import { AddCourseComponent } from './add_course_form/add-course.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    CourseItemComponent,
    ClickStopPropagation,
    RateComponent,
    AddCourseComponent
  ],
  imports: [ BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [CourseService],
  bootstrap: [AppComponent, CourseListComponent]
})
export class AppModule { }
