import { Component } from '@angular/core';
import { CourseServiceService } from '../../../servises/User/Course/course-service.service';
import { InstructorSerService } from '../../../servises/User/InstructorFolder/instructor-ser.service';
import { StudentService } from '../../../servises/User/student/student/student.service';
import { UsernowService } from '../../../servises/userNow/usernow.service';
import { Course } from '../../interface/coursesInterface';
import { NgFor } from '@angular/common';
import { Instructor, User } from '../../interface/UserInterface';

@Component({
  selector: 'app-instrucor-enrolled',
  standalone: true,
  imports: [NgFor],
  templateUrl: './instrucor-enrolled.component.html',
  styleUrl: './instrucor-enrolled.component.css'
})
export class InstrucorEnrolledComponent {
  courses: Course[] = [];
  Enrolledcourses: Course[] = [];
  Instructor:Instructor={
  id: 0,
  rating: "",
  role_id: 0,
  user_id: 0,
  created_at: "",
  updated_at: ""

  }
  User:User={
  id: 0,
  first_name: "",
  last_name: "",
  email: "",
  email_verified_at: "",
  phone_number: "",
  image_path: "",
  created_at: "",
  updated_at: ""
  }
  constructor(private courseService: CourseServiceService,private userService:UsernowService,private studentService:StudentService,private instructorService:InstructorSerService) {}
  ngOnInit(): void {
    this.getDataOfloggedUser();
  }
  getDataOfInstructorByUserId(id:string){
    this.instructorService.getInstructorByUserId(id).subscribe(
      (response:any) => {
         console.log("instructor data");
        console.log(response)
        this.Instructor=response;
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
       this.User=response;
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
  //  getEnrolledCourseForInstructor
  getRating(rating: string): number {
    return Math.floor(parseFloat(rating));
  }
}
