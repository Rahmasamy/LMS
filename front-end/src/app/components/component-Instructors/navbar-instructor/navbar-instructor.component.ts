import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CourseServiceService } from '../../../servises/User/Course/course-service.service';
import { InstructorSerService } from '../../../servises/User/InstructorFolder/instructor-ser.service';
import { StudentService } from '../../../servises/User/student/student/student.service';
import { UsernowService } from '../../../servises/userNow/usernow.service';

@Component({
  selector: 'app-navbar-instructor',
  standalone: true,
  imports: [RouterLink,RouterOutlet],
  templateUrl: './navbar-instructor.component.html',
  styleUrl: './navbar-instructor.component.css'
})
export class NavbarInstructorComponent {
  User: any = {} as any;
  bio:string=''
 constructor(private courseService: CourseServiceService,private userService:UsernowService,private studentService:StudentService,private instructorService:InstructorSerService) {}

 ngOnInit(){
   this.getDataOfloggedUser();
 }

 getDataOfInstructorByUserId(id:string){
   this.instructorService.getInstructorByUserId(id).subscribe(
     (response:any) => {
        console.log("instructor data");
       console.log(response)
     //  this.getEnrolledCourseForInstructor(response.id);
       this.bio=response.bio
     },
     (error) => {
       console.error('courses error', error);
     }
   )
 }
 getDataOfloggedUser(){
   this.userService.getDataOfloggedUser().subscribe(
    (response:any)=> {
     console.log("loggged data ........")
      console.log(response)
     console.log("Response",response);
     this.User=response;
     this.getDataOfInstructorByUserId(response.id);

    },
    (error:any) => {
      console.error('courses error', error);
    }
   )
  }
}
