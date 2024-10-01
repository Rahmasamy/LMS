import { Component } from '@angular/core';
import { CourseServiceService } from '../../../servises/User/Course/course-service.service';
import { ActivatedRoute } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { SectionInterface } from '../../interface/section-interface';
import { RouterLink } from '@angular/router';
import { LoadingComponent } from '../loading/loading.component';

@Component({
  selector: 'app-course-details',
  standalone: true,
  imports: [NgFor,NgIf, RouterLink, LoadingComponent],
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.css',
})
export class CourseDetailsComponent {
  courseId: string | null = '';
  course: any = {};
  Sections: SectionInterface[] = [];
  data: boolean = false;
  constructor(
    private servesCourse: CourseServiceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.courseId = params.get('id');
      console.log(this.courseId);
    });
    this.showSingleCourse(this.courseId);
    this.showSectionsCourse(this.courseId);
  }
  getRating(rating: string): number {
    return Math.floor(parseFloat(rating));
  }
  showSingleCourse(id: string | null) {
    this.servesCourse.showSingleCourse(id).subscribe(
      (response: any) => {
        this.course = response.data;
        this.course ? (this.data = true) : (this.data = false);
        console.log(response.data);
      },
      (error) => {
        console.error('courses error', error);
      }
    );
  }

  showSectionsCourse(id: string | null) {
    this.servesCourse.showSectionsCourse(id).subscribe(
      (response: { data: SectionInterface[] } | any) => {
        this.Sections = response;
        console.log(response, 'ahmed');
      },
      (error) => {
        console.error('courses error', error);
      }
    );
  }
}
