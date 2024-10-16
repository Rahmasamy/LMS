import { Component } from '@angular/core';
import { CourseServiceService } from '../../../servises/User/Course/course-service.service';
import { InstructorSerService } from '../../../servises/User/InstructorFolder/instructor-ser.service';
import { StudentService } from '../../../servises/User/student/student/student.service';
import { UsernowService } from '../../../servises/userNow/usernow.service';
import { Course } from '../../interface/coursesInterface';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-instructoer-wishlist',
  standalone: true,
  imports: [NgFor],
  templateUrl: './instructoer-wishlist.component.html',
  styleUrl: './instructoer-wishlist.component.css'
})
export class InstructoerWishlistComponent {
  constructor(private courseService: CourseServiceService,private userService:UsernowService,private studentService:StudentService,private instructorService:InstructorSerService) {}
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
