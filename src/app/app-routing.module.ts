import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddCourseComponent } from './add_course_form/add-course.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';



const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch:'full'},
    {path: 'home', component: HomeComponent},
    {path: 'course_details/:id', component: CourseDetailsComponent},
    {path: 'add_course', component: AddCourseComponent},
    {path: 'login', component: LoginComponent},
    {path: 'signup', component: SignupComponent},
    {path: '404', component: PageNotFoundComponent},
    {path: '**', redirectTo: '404', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
    CourseDetailsComponent, 
    AddCourseComponent, 
    PageNotFoundComponent, 
    HomeComponent
]

