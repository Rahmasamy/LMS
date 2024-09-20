import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { InstractorComponent } from './components/instractor/instractor.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { StudentComponent } from './components/student/student.component';


export const routes: Routes = [
{path: '', component:HomePageComponent},
{path: 'instructor', component:InstractorComponent},
{path: 'student', component:StudentComponent},
{path: 'signin', component:SigninComponent},
{path: 'signup', component:SignupComponent},
];
