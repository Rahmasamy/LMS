import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileInstructorComponent } from '../profile-instructor/profile-instructor.component';
import { NavbarInstructorComponent } from '../navbar-instructor/navbar-instructor.component';
import { InstructorDashbordComponent } from '../instructor-dashbord/instructor-dashbord.component';
import { InstrucorEnrolledComponent } from '../instrucor-enrolled/instrucor-enrolled.component';
import { InstrutorQuestionAnswerComponent } from '../instrutor-question-answer/instrutor-question-answer.component';
import { InstrutorReferralsComponent } from '../instrutor-referrals/instrutor-referrals.component';
import { InstrutorCoursesComponent } from '../instrutor-courses/instrutor-courses.component';
import { InstrutorAnnouncementComponent } from '../instrutor-announcement/instrutor-announcement.component';

@Component({
  selector: 'app-dashbord-main-instructor',
  standalone: true,
  imports: [
    RouterOutlet,
    InstructorDashbordComponent,
    ProfileInstructorComponent,
    NavbarInstructorComponent,
    InstrucorEnrolledComponent,
    InstrutorQuestionAnswerComponent,
    InstrutorReferralsComponent,
    InstrutorCoursesComponent,
    InstrutorAnnouncementComponent,
  ],
  templateUrl: './dashbord-main-instructor.component.html',
  styleUrl: './dashbord-main-instructor.component.css',
})
export class DashbordMainInstructorComponent {}
