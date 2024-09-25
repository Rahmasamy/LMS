import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InstructorDashbordComponent } from '../instructor-dashbord/instructor-dashbord.component';

@Component({
  selector: 'app-instractor',
  standalone: true,
  imports: [RouterOutlet,InstructorDashbordComponent],
  templateUrl: './instractor.component.html',
  styleUrl: './instractor.component.css'
})
export class InstractorComponent {

}
