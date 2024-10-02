import { Component } from '@angular/core';
import { HeaderofcontentComponent } from '../../headerofcontent/headerofcontent.component';
import { FeaturedInstructorsComponent } from '../featured-instructors/featured-instructors.component';
import { NgFor, NgIf } from '@angular/common';
import { CourseServiceService } from '../../../servises/User/Course/course-service.service';
import { Course } from '../../interface/coursesInterface';
import { RouterLink } from '@angular/router';
import { LoadingComponent } from '../../pages/loading/loading.component';

@Component({
  selector: 'app-trending-courses',
  standalone: true,
  imports: [
    RouterLink,
    HeaderofcontentComponent,
    FeaturedInstructorsComponent,
    NgFor,
    NgIf,
    LoadingComponent,
  ],
  templateUrl: './trending-courses.component.html',
  styleUrl: './trending-courses.component.css',
})
export class TrendingCoursesComponent {
  headingName: string = 'What is New';
  subHeading: string = 'TRENDING COURSES';
  all: string = 'All Courses trinding';
  paragraph: string =
    'Lorem ipsum dolor sit amet,consectetur adipiscing elit. Eget aenean accumsan bibendum gravida maecenas augue elementum et neque. Suspendisse imperdiet.';
  constructor(private courseService: CourseServiceService) {}
  courses: Course[] = [];
  Instructor: any[] = [];
  instructors: { [key: string]: any } = {};
  data: boolean = false;
  ngOnInit(): void {
    this.courseService.displayCourses().subscribe(
      (response) => {
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
