import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileInstructorComponent } from '../profile-instructor/profile-instructor.component';
import { NavbarInstructorComponent } from '../navbar-instructor/navbar-instructor.component';
import { InstructorDashbordComponent } from '../instructor-dashbord/instructor-dashbord.component';

@Component({
  selector: 'app-dashbord-main-instructor',
  standalone: true,
  imports: [
    RouterOutlet,
    InstructorDashbordComponent,
    ProfileInstructorComponent,
    NavbarInstructorComponent,
  ],
  templateUrl: './dashbord-main-instructor.component.html',
  styleUrl: './dashbord-main-instructor.component.css',
})
export class DashbordMainInstructorComponent {}
