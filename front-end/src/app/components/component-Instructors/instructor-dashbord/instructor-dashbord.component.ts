import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarInstructorComponent } from '../navbar-instructor/navbar-instructor.component';
import { ProfileInstructorComponent } from '../profile-instructor/profile-instructor.component';

@Component({
  selector: 'app-instructor-dashbord',
  standalone: true,
  imports: [RouterOutlet,NavbarInstructorComponent,ProfileInstructorComponent],
  templateUrl: './instructor-dashbord.component.html',
  styleUrl: './instructor-dashbord.component.css',
})
export class InstructorDashbordComponent {}
