import { Component } from '@angular/core';
import { HeaderofcontentComponent } from '../../headerofcontent/headerofcontent.component';
import { FeaturedInstructorsComponent } from '../featured-instructors/featured-instructors.component';
import { CourseServiceService } from '../../../servises/User/Course/course-service.service';
import { Course } from '../../interface/coursesInterface';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LoadingComponent } from '../../pages/loading/loading.component';

@Component({
  selector: 'app-featured-courses',
  standalone: true,
  imports: [
    RouterLink,
    LoadingComponent,
    HeaderofcontentComponent,
    FeaturedInstructorsComponent,
    NgFor,
    NgIf,
  ],
  templateUrl: './featured-courses.component.html',
  styleUrl: './featured-courses.component.css',
})
export class FeaturedCoursesComponent {
  headingName: string = 'What is New';
  subHeading: string = 'Featured Courses';
  all: string = 'All Categories';
  paragraph: string =
    'Lorem ipsum dolor sit amet,consectetur adipiscing elit. Eget aenean accumsan bibendum gravida maecenas augue elementum et neque. Suspendisse imperdiet.';
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
  getInstructorOfCourse(id: number) {
    this.courseService.instructorOfCourse(id.toString()).subscribe(
      (response: any) => {
        console.log('hhhhhhhhhhhh');
        this.instructors[id] = response;
        console.log('INSTRUCTOR DATA', this.Instructor);
      },
      (error) => {
        console.error('Instructor Data error', error);
      }
    );
  }
}
