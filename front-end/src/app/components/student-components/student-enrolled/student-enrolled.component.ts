import { Component } from '@angular/core';
import { CourseServiceService } from '../../../servises/User/Course/course-service.service';
import { InstructorSerService } from '../../../servises/User/InstructorFolder/instructor-ser.service';
import { StudentService } from '../../../servises/User/student/student/student.service';
import { UsernowService } from '../../../servises/userNow/usernow.service';
import { Course } from '../../interface/coursesInterface';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-student-enrolled',
  standalone: true,
  imports: [NgFor],
  templateUrl: './student-enrolled.component.html',
  styleUrl: './student-enrolled.component.css'
})
export class StudentEnrolledComponent {
  EnrolledCourses: Course[] = [];
  constructor(private courseService: CourseServiceService,private userService:UsernowService,private studentService:StudentService,private instructorService:InstructorSerService) {}

  ngOnInit(){
   this.getDataOfloggedUser();
  }
  getRating(rating: string): number {
    return Math.floor(parseFloat(rating));
  }

  getDataOfloggedUser(){
   this.userService.getDataOfloggedUser().subscribe(
    (response:any)=> {
      console.log(response)
      this.getDataOfStudent(response.id)
    },
    (error:any) => {
      console.error('courses error', error);
    }
   )
  }
  getDataOfStudent(id:string){
    this.studentService.getDataOfUser(id).subscribe(
      (response:any)=> {

        this.getEnrollemtCourses(response.student.id)
      },
      (error) => {
        console.error('courses error', error);
      }
    )
  }
  getEnrollemtCourses(id:string){
    this.studentService.getRecentlyEnrolledCourse(id).subscribe(
      (response:any) =>{

        this.EnrolledCourses=response;
        console.log(this.EnrolledCourses)
        // this.EnrolledCourses.forEach(course => {


        //   });


      }
      ,(error) => {
        console.error('courses error', error);
      }
    )
  }
}
