import { Component } from '@angular/core';
import { NavbarInstructorComponent } from '../navbar-instructor/navbar-instructor.component';

@Component({
  selector: 'app-profile-instructor',
  standalone: true,
  imports: [NavbarInstructorComponent],
  templateUrl: './profile-instructor.component.html',
  styleUrl: './profile-instructor.component.css'
})
export class ProfileInstructorComponent {

}
