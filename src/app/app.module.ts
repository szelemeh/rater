import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseListComponent} from './course/app.course-list';
import { CourseItemComponent} from './course/app.course-item';
import { CourseService } from './services/course.service';
import { ClickStopPropagation } from './stop-propagation'
import { RateComponent } from './rate_stars/rate.component';
import { AddCourseComponent } from './add_course_form/add-course.component';
import { SearchComponent } from './search_courses/search.component';
import { NameSearchPipe } from '../pipes/name-search.pipe';
import { RateSearchPipe } from '../pipes/rate-search.pipe';
import { SemesterSearchPipe } from 'src/pipes/semester-search.pipe';
import { EtcsSearchPipe } from 'src/pipes/etcs-search.pipe';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
@NgModule({
declarations: [
    AppComponent,
    routingComponents,
    CourseListComponent,
    CourseItemComponent,
    ClickStopPropagation,
    RateComponent,
    AddCourseComponent,
    SearchComponent,
    NameSearchPipe,
    RateSearchPipe,
    SemesterSearchPipe,
    EtcsSearchPipe,
    HomeComponent,
    NavigationComponent,
    PageNotFoundComponent,
    LoginComponent,
    SignupComponent,
],
imports: [
    BrowserModule, 
    AppRoutingModule, 
    ReactiveFormsModule, 
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule, // do obsługi autentykacji
    AngularFirestoreModule, // do obslugi baz danych
    AngularFireDatabaseModule // do obslugi baz danych
],
    providers: [CourseService],
    bootstrap: [AppComponent]
})
export class AppModule { }
