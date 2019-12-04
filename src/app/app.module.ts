import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseListComponent} from './course/app.course-list';
import { CourseItemComponent} from './course/app.course-item';
import { CourseService } from './services/course.service';
import {ClickStopPropagation} from './stop-propagation'

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    CourseItemComponent,
    ClickStopPropagation
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CourseService],
  bootstrap: [AppComponent, CourseListComponent]
})
export class AppModule { }
