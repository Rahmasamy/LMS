import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { InstractorComponent } from './components/component-Instructors/instractor/instractor.component';
import { HomePageComponent } from './components/User/home-page/home-page.component';
import { StudentComponent } from './components/student/student.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileInstructorComponent } from './components/component-Instructors/profile-instructor/profile-instructor.component';
import { DashbordMainInstructorComponent } from './components/component-Instructors/dashbord-main-instructor/dashbord-main-instructor.component';
import { InstructorDashbordComponent } from './components/component-Instructors/instructor-dashbord/instructor-dashbord.component';
import { InstructoerWishlistComponent } from './components/component-Instructors/instructoer-wishlist/instructoer-wishlist.component';
import { InstructorReviewsComponent } from './components/component-Instructors/instructor-reviews/instructor-reviews.component';
import { InstructorQuizComponent } from './components/component-Instructors/instructor-quiz/instructor-quiz.component';
export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'instructor', component: InstractorComponent },
  {
    path: 'dashboard',
    component: DashbordMainInstructorComponent,
    children: [
      { path: '', component: InstructorDashbordComponent },
      { path: 'dashboard', component: InstructorDashbordComponent },
      { path: 'profileInstructor', component: ProfileInstructorComponent },
      { path: 'wishlist', component: InstructoerWishlistComponent },
      { path: 'reviews', component: InstructorReviewsComponent },
      { path: 'quiz', component: InstructorQuizComponent },
    ],
  },
  { path: 'student', component: StudentComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
];
