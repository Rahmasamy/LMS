import { Component } from '@angular/core';
import { CourseServiceService } from '../../../servises/User/Course/course-service.service';
import { InstructorSerService } from '../../../servises/User/InstructorFolder/instructor-ser.service';
import { StudentService } from '../../../servises/User/student/student/student.service';
import { UsernowService } from '../../../servises/userNow/usernow.service';
import { Course } from '../../interface/coursesInterface';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-student-wishlist',
  standalone: true,
  imports: [NgFor],
  templateUrl: './student-wishlist.component.html',
  styleUrl: './student-wishlist.component.css'
})
export class StudentWishlistComponent {
  constructor(private courseService: CourseServiceService,private userService:UsernowService,private studentService:StudentService,private instructorService:InstructorSerService) {}
  //showWislListCourse()
  courses:Course[]=[]
  ngOnInit(){
   this.showWish();
  }
  getRating(rating: string): number {
    return Math.floor(parseFloat(rating));
  }
  showWish(){
    this.courseService.showWislListCourse().subscribe(
      (response:any)=> {
        console.log(response)

        this.courses = response.map((item: any) => item.course);
      console.log("hhhhhhhhhhhhhhh")
      console.log(this.courses)
      },
      (error:any) => {
        console.error('courses error', error);
      })
  }
}
