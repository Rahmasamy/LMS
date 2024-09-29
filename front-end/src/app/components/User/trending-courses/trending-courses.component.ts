import { Component } from '@angular/core';
import { HeaderofcontentComponent } from '../../headerofcontent/headerofcontent.component';
import { FeaturedInstructorsComponent } from '../featured-instructors/featured-instructors.component';
import { NgFor, NgIf } from '@angular/common';
import { CourseServiceService } from '../../../servises/User/Course/course-service.service';
import { Course } from '../featured-courses/coursesInterface';

@Component({
  selector: 'app-trending-courses',
  standalone: true,
  imports: [HeaderofcontentComponent,FeaturedInstructorsComponent,NgFor,NgIf],
  templateUrl: './trending-courses.component.html',
  styleUrl: './trending-courses.component.css'
})
export class TrendingCoursesComponent {


  headingName: string = 'What is New';
  subHeading: string = 'TRENDING COURSES';
  all: string = 'All Courses';
  paragraph:string='Lorem ipsum dolor sit amet,consectetur adipiscing elit. Eget aenean accumsan bibendum gravida maecenas augue elementum et neque. Suspendisse imperdiet.'
  constructor(private courseService: CourseServiceService) {}
  courses: Course[] = [];
  Instructor:any[]=[];
  instructors: { [key: string]: any } = {}
  ngOnInit(): void {
    this.courseService.displayCourses().subscribe(

      (response) => {

        this.courses=response.data.data



      },
      (error) => {
        console.error('courses error', error);
      }
    );


  }
  getRating(rating: string): number {
    return Math.floor(parseFloat(rating));
  }
  getInstructorOfCourse(id:number){
    this.courseService.instructorOfCourse(id.toString()).subscribe(
      (response:any) => {
        console.log("hhhhhhhhhhhh");
        this.instructors[id] = response;
        console.log('INSTRUCTOR DATA', this.Instructor);

      },
      (error) => {
        console.error('Instructor Data error', error);
      }
    )
  }
}
