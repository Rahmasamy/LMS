import { Component } from '@angular/core';
import { CategoryServiceService } from '../../../servises/User/Category/category-service.service';
import { CourseServiceService } from '../../../servises/User/Course/course-service.service';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,

} from '@angular/forms';
import { NotificationService } from '../../../services/notification.service';
import { NgClass, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-instructor-admin',
  standalone: true,
  imports: [ReactiveFormsModule,NgClass,NgIf,NgFor],
  templateUrl: './instructor-admin.component.html',
  styleUrl: './instructor-admin.component.css',
})
export class InstructorAdminComponent {
  allCategory: [{}] | any;
  courseData!: FormGroup;
  currentStep: number = 1;

  constructor(
    private servesCategory: CategoryServiceService,
    private servesCourse: CourseServiceService,
    private notificationService:NotificationService,
    private fb: FormBuilder
  ) {
    this.getCategoryByInstructor();
  }

  ngOnInit() {
    this.courseData = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      category_id: ['2', Validators.required],
      instructor_id: ['2', Validators.required],
      start_date: ['', Validators.required],
      end_date: ['', Validators.required],
      benefits: ['', Validators.required],
      requirements: ['', Validators.required],
      plan: ['', Validators.required],
      durations: ['', Validators.required],
      level: ['', Validators.required],
      image_path:['',Validators.required],
      price:['',Validators.required]
    });
    console.log('current step',this.currentStep)
  }

  getCategoryByInstructor() {
    this.servesCategory.getCategoryByInstructor().subscribe(
      (response) => {
        this.allCategory = response.data.data;
        console.log("All Category")
        console.log(response.data.data);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  addCourse() {
    console.log(this.courseData.value);
    // if (this.courseData.valid) {
    this.servesCourse.addCourse(this.courseData.value).subscribe(
      (response) => {
        console.log('dasdasfdaASASD');
        console.log(this.courseData.value);
        console.log(response);
        this.notificationService.showSuccess(
          `You have successfully Succeflly add the course.`,
          'Adding Course Successfully'
        )
      },
      (error) => {
        console.log('dsadsad');
        console.error(error);
        this.notificationService.showError(
          'Failed to Add Course Twice....','Error in Adding'
        )
      }
    );
    // }
  }

  goToNextStep() {
    if (this.currentStep < 4) {
      this.currentStep++;
    }
  }

  goToPreviousStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

}
