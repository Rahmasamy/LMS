import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarStudentComponent } from '../navbar-student/navbar-student.component';


@Component({
  selector: 'app-dashbord-main-student',
  standalone: true,
  imports: [  RouterOutlet,NavbarStudentComponent],
  templateUrl: './dashbord-main-student.component.html',
  styleUrl: './dashbord-main-student.component.css'
})
export class DashbordMainStudentComponent {

}
