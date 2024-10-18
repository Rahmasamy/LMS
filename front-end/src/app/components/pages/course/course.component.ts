import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NotificationService } from '../../../services/notification.service';
import { CourseServiceService } from '../../../servises/User/Course/course-service.service';
import { Course } from '../../interface/coursesInterface';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [RouterLink,NgFor],
  templateUrl: './course.component.html',
  styleUrl: './course.component.css'
})
export class CourseComponent {
  courses: Course[] = [];
  Instructor: any[] = [];
  instructors: { [key: string]: any } = {};
  filteredCourses: any[] = [];
  searchTerm: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 9;
  constructor(private courseService: CourseServiceService,private notificationService:NotificationService) {}
  ngOnInit(): void {
    this.courseService.displayCourses().subscribe(
      (response) => {
        console.log("courses data")
        console.log(response.data.data)
        this.courses = response.data.data;
        console.log(this.courses)
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

