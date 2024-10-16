import { Component } from '@angular/core';
import { NavbarInstructorComponent } from '../navbar-instructor/navbar-instructor.component';
import { CourseServiceService } from '../../../servises/User/Course/course-service.service';
import { InstructorSerService } from '../../../servises/User/InstructorFolder/instructor-ser.service';
import { StudentService } from '../../../servises/User/student/student/student.service';
import { UsernowService } from '../../../servises/userNow/usernow.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-profile-instructor',
  standalone: true,
  imports: [NavbarInstructorComponent,NgIf],
  templateUrl: './profile-instructor.component.html',
  styleUrl: './profile-instructor.component.css'
})
export class ProfileInstructorComponent {
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
