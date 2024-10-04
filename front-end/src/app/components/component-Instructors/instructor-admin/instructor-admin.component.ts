import { Component } from '@angular/core';
import { CategoryServiceService } from '../../../servises/User/Category/category-service.service';
import { CourseServiceService } from '../../../servises/User/Course/course-service.service';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-instructor-admin',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './instructor-admin.component.html',
  styleUrl: './instructor-admin.component.css',
})
export class InstructorAdminComponent {
  allCategory: [{}] | any;
  courseData!: FormGroup;

  constructor(
    private servesCategory: CategoryServiceService,
    private servesCourse: CourseServiceService,
    private fb: FormBuilder
  ) {
    this.getCategoryByInstructor();
  }

  ngOnInit() {
    this.courseData = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      category_id: ['2', Validators.required],
      status: ['', [Validators.required]],
      instructor_id: ['2', Validators.required],
      start_date: ['', Validators.required],
      end_date: ['', Validators.required],
      benefits: ['', Validators.required],
      requirements: ['', Validators.required],
      plan: ['', Validators.required],
      durations: ['', Validators.required],
      level: ['', Validators.required],
    });
  }

  getCategoryByInstructor() {
    this.servesCategory.getCategoryByInstructor().subscribe(
      (response) => {
        this.allCategory = response.data.data;
        console.log(response.data.data);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  addCourse() {
    // if (this.courseData.valid) {
    this.servesCourse.addCourse(this.courseData.value).subscribe(
      (response) => {
        console.log('dasdasfdaASASD');
        console.log(this.courseData.value);
        console.log(response);
      },
      (error) => {
        console.log('dsadsad');
        console.error(error);
      }
    );
    // }
  }
}
