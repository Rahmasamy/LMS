import { Component } from '@angular/core';
import { CourseServiceService } from '../../../servises/User/Course/course-service.service';
import { Course } from '../../interface/coursesInterface';

@Component({
  selector: 'app-student-courses',
  standalone: true,
  imports: [],
  templateUrl: './student-courses.component.html',
  styleUrl: './student-courses.component.css'
})
export class StudentCoursesComponent {
  headingName: string = 'What is New';
  subHeading: string = 'Featured Courses';
  all: string = 'All Categories';
  paragraph: string ='Lorem ipsum dolor sit amet,consectetur adipiscing elit. Eget aenean accumsan bibendum gravida maecenas augue elementum et neque. Suspendisse imperdiet.';
  data: Boolean = false;
  courses: Course[] = [];
  Instructor: any[] = [];
  instructors: { [key: string]: any } = {};
  constructor(private courseService: CourseServiceService) {}
  ngOnInit(): void {
    console.log(this.data);
    this.courseService.displayCourses().subscribe(
      (response) => {
        console.log(response)
        this.courses ? (this.data = true) : (this.data = false);
        this.courses = response.data.data;
      },
      (error) => {
        console.error('courses error', error);
      }
    );
  }
  getRating(rating: string): number {
    return Math.floor(parseFloat(rating));
  }
}
