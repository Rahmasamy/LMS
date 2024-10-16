import { Component } from '@angular/core';
import { Course } from '../../interface/coursesInterface';
import { CourseServiceService } from '../../../servises/User/Course/course-service.service';
import { NgFor } from '@angular/common';
import { UsernowService } from '../../../servises/userNow/usernow.service';
import { StudentService } from '../../../servises/User/student/student/student.service';
import { InstructorSerService } from '../../../servises/User/InstructorFolder/instructor-ser.service';
import { User } from '../../interface/UserInterface';
@Component({
  selector: 'app-student-dashbord',
  standalone: true,
  imports: [NgFor],
  templateUrl: './student-dashbord.component.html',
  styleUrl: './student-dashbord.component.css'
})
export class StudentDashbordComponent {
  headingName: string = 'What is New';
  subHeading: string = 'Featured Courses';
  all: string = 'All Categories';
  paragraph: string ='Lorem ipsum dolor sit amet,consectetur adipiscing elit. Eget aenean accumsan bibendum gravida maecenas augue elementum et neque. Suspendisse imperdiet.';
  data: Boolean = false;
  courses: Course[] = [];
  EnrolledCourses: Course[] = [];
  Instructor: any[] = [];
  Users:User[]=[];
  instructors: { [key: string]: any } = {};
  User: any = {} as any;
  bio:string=''
  reviews:any[]=[]

  constructor(private courseService: CourseServiceService,private userService:UsernowService,private studentService:StudentService,private instructorService:InstructorSerService) {}
  ngOnInit(): void {

    this.courseService.displayRecentCourse().subscribe(
      (response:any) => {
        console.log(response)
        this.courses ? (this.data = true) : (this.data = false);
        this.courses = response.data;
      },
      (error) => {
        console.error('courses error', error);
      }
    );

    this.getDataOfloggedUser();
  }
  getRating(rating: string): number {
    return Math.floor(parseFloat(rating));
  }
  getDataOfloggedUser(){

   this.userService.getDataOfloggedUser().subscribe(
    (response:any)=> {
      console.log(response)
      this.getDataOfStudent(response.id);
      this.getDataOfUser(response.id)
    },
    (error:any) => {
      console.error('courses error', error);
    }
   )
  }
 
  getDataOfStudent(id:string){

    this.studentService.getDataOfUser(id).subscribe(
      (response:any)=> {
        console.log("hhhhhhhhhhhhhhhhhhh")
        console.log(response)
        this.getEnrollemtCourses(response.id)
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
        this.EnrolledCourses.forEach(course => {

            this.getInstructorData(course.instructor_id)
          });


      }
      ,(error) => {
        console.error('courses error', error);
      }
    )
  }
  getDataOfInstructor(id:string){
    return this.instructorService.getDataOFSpecificUser(id).subscribe(
      (response:any) =>{

        this.Users=response.data
        console.log(this.Users)
      }
      ,(error) => {
        console.error('courses error', error);
      }
    )
  }
  getInstructorData(id: number) {

    this.instructorService.getInstructorData(id).subscribe(
      (response: any) => {

        this.getDataOfInstructor(response.data.user_id)

      },
      (error) => {
        console.error('Error fetching courses:', error);
      }
    );
  }
  getDataOfUser(id:string){
    this.studentService.getDataOfUser(id).subscribe(
      (response:any)=> {

       this.User=response;
       console.log(this.User.student.id)
       this.studentService.getDataOfStudentStudentId(this.User.student.id).subscribe(
         (response:any)=> {
           console.log("student")
            console.log(response.data.id)
            this.studentService.getReviewOfStudent(response.data.id).subscribe(
             (response:any)=>{

               this.reviews=response;
               console.log("reviews")
               console.log(this.reviews);
             },
             (error:any)=>{
               console.error('courses error', error);
             }
            )


          },
          (error:any) => {
            console.error('courses error', error);
          }
       )

      },
      (error) => {
        console.error('courses error', error);
      }
    )
  }

}
