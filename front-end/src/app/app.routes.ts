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
import { InstrucorEnrolledComponent } from './components/component-Instructors/instrucor-enrolled/instrucor-enrolled.component';
import { InstrutorQuestionAnswerComponent } from './components/component-Instructors/instrutor-question-answer/instrutor-question-answer.component';
import { InstrutorReferralsComponent } from './components/component-Instructors/instrutor-referrals/instrutor-referrals.component';
import { InstrutorCoursesComponent } from './components/component-Instructors/instrutor-courses/instrutor-courses.component';
import { InstrutorAnnouncementComponent } from './components/component-Instructors/instrutor-announcement/instrutor-announcement.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { WichlistComponent } from './components/pages/wichlist/wichlist.component';
import { CourseComponent } from './components/pages/course/course.component';
import { CourseDetailsComponent } from './components/pages/course-details/course-details.component';
import { ErrorsComponent } from './components/pages/errors/errors.component';
import { CourseAfterEnrollmentComponent } from './components/pages/course-after-enrollment/course-after-enrollment.component';
import { PaymentCourseComponent } from './components/pages/payment-course/payment-course.component';
import { InstructorRouteAdminComponent } from './components/component-Instructors/instructor-route-admin/instructor-route-admin.component';
import { InstructorAdminComponent } from './components/component-Instructors/instructor-admin/instructor-admin.component';
import { DashbordMainStudentComponent } from './components/student-components/dashbord-main-student/dashbord-main-student.component';
import { StudentDashbordComponent } from './components/student-components/student-dashbord/student-dashbord.component';
import { StudentProfileComponent } from './components/student-components/student-profile/student-profile.component';
import { StudentWishlistComponent } from './components/student-components/student-wishlist/student-wishlist.component';
import { StudentEnrolledComponent } from './components/student-components/student-enrolled/student-enrolled.component';
import { StudentQuestionAnswerComponent } from './components/student-components/student-question-answer/student-question-answer.component';
import { StudentReferralsComponent } from './components/student-components/student-referrals/student-referrals.component';
import { StudentReviewsComponent } from './components/student-components/student-reviews/student-reviews.component';
import { StudentQuizComponent } from './components/student-components/student-quiz/student-quiz.component';
import { StudentCoursesComponent } from './components/student-components/student-courses/student-courses.component';
import { StudentAnnouncementComponent } from './components/student-components/student-announcement/student-announcement.component';
export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'instructor', component: InstractorComponent },
  {
    path: 'instructor-dashboard',
    component: DashbordMainInstructorComponent,
    children: [
      { path: '', component: InstructorDashbordComponent },
      { path: 'instructor-dashboard', component: InstructorDashbordComponent },
      { path: 'instructor-profile', component: ProfileInstructorComponent },
      { path: 'instructor-wishlist', component: InstructoerWishlistComponent },
      {
        path: 'instructor-enrolledcourse',
        component: InstrucorEnrolledComponent,
      },
      {
        path: 'instructor-qustions-answer',
        component: InstrutorQuestionAnswerComponent,
      },
      { path: 'instructor-referral', component: InstrutorReferralsComponent },
      { path: 'instructor-reviews', component: InstructorReviewsComponent },
      { path: 'instructor-quiz', component: InstructorQuizComponent },
      { path: 'instructor-course', component: InstrutorCoursesComponent },
      {
        path: 'instructor-announcement',
        component: InstrutorAnnouncementComponent,
      },
    ],
  },

  { path: 'student', component: StudentComponent },
  {
    path: 'student-main-dashboard',
    component: DashbordMainStudentComponent,
    children: [
      { path: '', component: StudentDashbordComponent},
      { path: 'student-dashboard', component: StudentDashbordComponent },
      { path: 'student-profile', component: StudentProfileComponent},
      { path: 'student-wishlist', component: StudentWishlistComponent },
      {
        path: 'student-enrolledcourse',
        component: StudentEnrolledComponent,
      },
      {
        path: 'student-qustions-answer',
        component: StudentQuestionAnswerComponent,
      },
      { path: 'student-referral', component: StudentReferralsComponent },
      { path: 'student-reviews', component: StudentReviewsComponent },
      { path: 'student-quiz', component: StudentQuizComponent },
      { path: 'student-course', component: StudentCoursesComponent },
      {
        path: 'student-announcement',
        component: StudentAnnouncementComponent,
      },
    ],
  },

  {
    path: 'add-course',
    component: InstructorRouteAdminComponent,
    children: [{ path: '', component: InstructorAdminComponent }],
  },
  { path: 'student', component: StudentComponent },
  { path: 'notification', component: NotificationsComponent },
  { path: 'wishlist', component: WichlistComponent },
  { path: 'courses', component: CourseComponent },
  { path: 'courses/course-details/:id', component: CourseDetailsComponent },
  {
    path: 'courses/course-details/:id/free',
    component: CourseAfterEnrollmentComponent,
  },
  {
    path: 'courses/course-details/:id/payment',
    component: PaymentCourseComponent,
  },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: '**', component: ErrorsComponent },
];
