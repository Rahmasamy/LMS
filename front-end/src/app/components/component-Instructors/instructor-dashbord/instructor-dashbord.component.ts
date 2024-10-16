import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarInstructorComponent } from '../navbar-instructor/navbar-instructor.component';
import { ProfileInstructorComponent } from '../profile-instructor/profile-instructor.component';
import { CourseServiceService } from '../../../servises/User/Course/course-service.service';
import { Course } from '../../interface/coursesInterface';
import { UsernowService } from '../../../servises/userNow/usernow.service';
import { StudentService } from '../../../servises/User/student/student/student.service';
import { InstructorSerService } from '../../../servises/User/InstructorFolder/instructor-ser.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-instructor-dashbord',
  standalone: true,
  imports: [RouterOutlet,NavbarInstructorComponent,ProfileInstructorComponent,NgFor],
  templateUrl: './instructor-dashbord.component.html',
  styleUrl: './instructor-dashbord.component.css',
})
export class InstructorDashbordComponent {
  courses: Course[] = [];
  Enrolledcourses: Course[] = [];
  constructor(private courseService: CourseServiceService,private userService:UsernowService,private studentService:StudentService,private instructorService:InstructorSerService) {}
  ngOnInit(): void {


    this.displayRecent5Course();
    this.getDataOfloggedUser();
  }
  displayRecent5Course(){
    this.courseService.displayRecentCourse().subscribe(
      (response:any) => {

        // this.courses ? (response.data = true) : (response.data = false);
        this.courses = response.data;
        console.log(this.courses)
      },
      (error) => {
        console.error('courses error', error);
      }
    );
  }
  getDataOfInstructorByUserId(id:string){
    this.instructorService.getInstructorByUserId(id).subscribe(
      (response:any) => {
         console.log("instructor data");
        console.log(response.id)
       this.getEnrolledCourseForInstructor(response.id);

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
      console.log("Response",response.id);
      this.getDataOfInstructorByUserId(response.id);

     },
     (error:any) => {
       console.error('courses error', error);
     }
    )
   }
   getEnrolledCourseForInstructor(id:string){
    this.instructorService.getEnrolledCourseForInstructor(id).subscribe(
      (response:any) => {
         console.log("Enrolled Courses for Instructor ");
         this.Enrolledcourses=response.data;
         console.log(this.Enrolledcourses)


      },
      (error) => {
        console.error('courses error', error);
      }
    )
  }

  getRating(rating: string): number {
    return Math.floor(parseFloat(rating));
  }

}
