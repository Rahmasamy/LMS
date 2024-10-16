import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InstructorAdminComponent } from '../instructor-admin/instructor-admin.component';

@Component({
  selector: 'app-instructor-route-admin',
  standalone: true,
  imports: [RouterOutlet,InstructorAdminComponent ],
  templateUrl: './instructor-route-admin.component.html',
  styleUrl: './instructor-route-admin.component.css'
})
export class InstructorRouteAdminComponent {
 
}
