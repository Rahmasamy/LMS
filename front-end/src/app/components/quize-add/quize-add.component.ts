import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CourseServiceService } from '../../servises/User/Course/course-service.service';
import { InstructorSerService } from '../../servises/User/InstructorFolder/instructor-ser.service';
import { UsernowService } from '../../servises/userNow/usernow.service';
import { Course } from '../interface/coursesInterface';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-quize-add',
  standalone: true,
  imports: [RouterLink,NgFor],
  templateUrl: './quize-add.component.html',
  styleUrl: './quize-add.component.css'
})
export class QuizeAddComponent {
  courses: Course[] = [];
  Enrolledcourses: Course[] = [];



  constructor(private courseService: CourseServiceService, private instructorService: InstructorSerService,
    private router: Router,
    private userService:UsernowService) {}
  getDataOfloggedUser(){
    this.userService.getDataOfloggedUser().subscribe(
     (response:any)=> {


      this.getDataOfInstructorByUserId(response.id)
     },
     (error:any) => {
       console.error('courses error', error);
     }
    )
   }
   getDataOfInstructorByUserId(id:string){
    this.instructorService.getInstructorByUserId(id).subscribe(
      (response:any) => {


        // this.Instructor=response;
        this.getCoursesOfInstructor(response.id)

      },
      (error) => {
        console.error('courses error', error);
      }
    )
  }
   getCoursesOfInstructor(instructorId:string){
    this.courseService.getCoursesByInstructor(instructorId).subscribe(
      (data) => {

        this.courses = data;
        console.log("courses")
        console.log(this.courses)
      },
      (error) => {
        console.error('Error fetching courses:', error);
      }
    );
  }
  ngOnInit() {

    this.getDataOfloggedUser()
  }
}
