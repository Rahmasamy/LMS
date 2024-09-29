import { Component } from '@angular/core';
import { HeaderofcontentComponent } from '../../headerofcontent/headerofcontent.component';
import { FeaturedInstructorsComponent } from '../featured-instructors/featured-instructors.component';
import { CourseServiceService } from '../../../servises/User/Course/course-service.service';
import { Course } from './coursesInterface';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-featured-courses',
  standalone: true,
  imports: [HeaderofcontentComponent,FeaturedInstructorsComponent,NgFor,NgIf],
  templateUrl: './featured-courses.component.html',
  styleUrl: './featured-courses.component.css'
})
export class FeaturedCoursesComponent {
  headingName: string = 'What is New';
  subHeading: string = 'Featured Courses';
  all: string = 'All Categories';
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
