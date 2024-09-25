import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navbar-instructor',
  standalone: true,
  imports: [RouterLink,RouterOutlet],
  templateUrl: './navbar-instructor.component.html',
  styleUrl: './navbar-instructor.component.css'
})
export class NavbarInstructorComponent {

}
