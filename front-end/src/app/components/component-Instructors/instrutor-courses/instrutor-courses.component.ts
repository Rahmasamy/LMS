import { Component } from '@angular/core';
import { CourseServiceService } from '../../../servises/User/Course/course-service.service';
import { Course } from '../../interface/coursesInterface';
import { UsernowService } from '../../../servises/userNow/usernow.service';
import { Router } from '@angular/router';
import { InstructorSerService } from '../../../servises/User/InstructorFolder/instructor-ser.service';
import { Instructor, User } from '../../interface/UserInterface';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-instrutor-courses',
  standalone: true,
  imports: [NgFor],
  templateUrl: './instrutor-courses.component.html',
  styleUrl: './instrutor-courses.component.css'
})
export class InstrutorCoursesComponent {
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
