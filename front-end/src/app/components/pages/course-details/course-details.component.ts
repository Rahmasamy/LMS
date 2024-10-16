import { Component } from '@angular/core';
import { CourseServiceService } from '../../../servises/User/Course/course-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { SectionInterface } from '../../interface/section-interface';
import { RouterLink } from '@angular/router';
import { LoadingComponent } from '../loading/loading.component';
import { InstructorSerService } from '../../../servises/User/InstructorFolder/instructor-ser.service';
import { User } from '../../interface/UserInterface';
import { Review } from '../../interface/review-interface';
import { StudentService } from '../../../servises/User/student/student/student.service';
import { UsernowService } from '../../../servises/userNow/usernow.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NotificationService } from '../../../services/notification.service';
import { Enrollment } from '../../interface/enrollmentInterface';
import { QuizeServiceService } from '../../../servises/quize/quize-service.service';

@Component({
  selector: 'app-course-details',
  standalone: true,
  imports: [NgFor,NgIf, RouterLink, LoadingComponent,ReactiveFormsModule],
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.css',
})
export class CourseDetailsComponent {
  courseId: string | null = '';
  course: any = {};
  Sections: SectionInterface[] = [];
  data: boolean = false;
  userId: string|null='';
  instructors: any;
  User: User|any;
  courseBenefits: string[] = [];
  reguiremnets: string[] = [];
  reviews: Review[] = [];
  courseLessons: any;
  student_id:number=0
  EnrollmentMessage:string=''
  reviewForm: FormGroup;
  quize:any;
  isEnrolled: boolean = false;
  coursePrice:string=""
  constructor(
    private servesCourse: CourseServiceService,
    private route: ActivatedRoute,
    private instructorService: InstructorSerService,
    private router: Router,
    private userService:UsernowService,private studentService:StudentService,
    private fb: FormBuilder,
    private notificationService:NotificationService,
    private quizeService:QuizeServiceService
  ) {
    this.reviewForm = this.fb.group({
      review: ['', Validators.required],
    });
  }

  ngOnInit() {

    this.route.paramMap.subscribe((params) => {
      this.courseId = params.get('id');
    });
    this.showSingleCourse(this.courseId);
    this.showSectionsCourse(this.courseId);
    this.getInstructorOfCourse(this.courseId);
    this.initData();
    this.getReviews(this.courseId);
    this.getLessonsByCourse(this.courseId);
    this.getDataOfloggedUser();
    this.viewQuize(this.courseId)




  }
  getPrice(coursePrice:string){
    return coursePrice;
  }

  async initData() {
    await this.getInstructorOfCourse(this.courseId);
    this.getUserData();  // Called after userId is fetched
  }
  getRating(rating: string): number {
    return Math.floor(parseFloat(rating));
  }
  showSingleCourse(id: string | null) {
    this.servesCourse.showSingleCourse(id).subscribe(
      (response: any) => {
        this.course = response.data;
        console.log("course price")
        console.log(this.course.price)
        this.coursePrice=this.getPrice(this.course.price);
        this.course ? (this.data = true) : (this.data = false);;
        //
        this.courseBenefits = this.course.benefits.split(',');
        this.reguiremnets= this.course.requirements.split(',');

        // this. getLessons(this.courseId)

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

      },
      (error) => {
        console.error('courses error', error);
      }
    );
  }

  async getInstructorOfCourse(id: number | any): Promise<void> {
    return new Promise((resolve, reject) => {
      this.servesCourse.instructorOfCourse(id.toString()).subscribe(
        (response: any) => {

          this.userId = response.user_id;
          console.log("????????????????????",this.userId)
          resolve();
        },
        (error: any) => {
          console.error('Instructor Data error', error);
          reject(error);
        }
      );
    });
  }

  async getUserData(){

   this.getDataOfInstructor(this.userId);
  }
  getDataOfInstructor(id:string|null){
    this.instructorService.getDataOFSpecificUser(id).subscribe(
      (response:any) => {
         this.User=response.data;
         console.log("instructor",this.User)


      },
      (error) => {
        console.error('courses error', error);
      }
    )
  }
  getReviews(courseId: string|null) {
    this.servesCourse.getCourseReviews(courseId).subscribe(
      (response: any) => {


        this.reviews = response;
        console.log(this.reviews)
      },
      (error) => {
        console.error('Error fetching reviews:', error);
      }
    );
  }
   getLessonsByCourse(courseId: string|null) {
     this.servesCourse.getCourseWithLessons(courseId).subscribe(
       (response: any) => {

         this.courseLessons=response

         this.EnrollmentMessage=response.message
         console.log(this.EnrollmentMessage);

       },
       (error) => {
         console.error('Error fetching lessons:', error);
       }
     );
   }
  enroll(studentId: any,InstructorId:any, courseId: any, paymentStatus: any) {
    if(Number(this.coursePrice) > 0){
      console.log("you have to pay for this course first ");
      this.notificationService.showError(
        'you have to pay for this course first.',
        'Enrollment Failed'
      );
      setTimeout(()=> {
        this.router.navigate([`/courses/course-details/${this.courseId}/payment`]);
      },400)
    }  else {
      this.servesCourse.enroll(studentId, InstructorId,courseId, paymentStatus).subscribe(
        (response) => {
          this.isEnrolled = true;
          console.log("enrolled")
          console.log(this.isEnrolled);
          console.log("course price")
          console.log(this.coursePrice);


            this.notificationService.showSuccess(
              `You have successfully enrolled in the course. Payment Status: ${response.enrollment.payment_status}`,
              'Enrollment Successful'
            ).then((result) => {
              if (result.isConfirmed) {
                this.router.navigate([`/courses/course-details/${this.course.id}/${response.enrollment.payment_status}`]);
              }

            });


        },
        (error) => {
          console.error('Enrollment failed:', error);

          // Use notification service for error alert
          this.notificationService.showError(
            'Something went wrong during enrollment. Please try again.',
            'Enrollment Failed'
          );
        }
      );
    }

  }
  getDataOfloggedUser(){
   this.userService.getDataOfloggedUser().subscribe(
    (response:any)=> {


      this.getDataOfStudent(response.id)
    },
    (error:any) => {
      console.error('courses error', error);
    }
   )
  }
  checkEnrollment(studentId: any, courseId: any) {
    this.servesCourse.getEnrollmentsForStudent(studentId).subscribe(
      (enrollments:any) => {
        console.log("enrollments");
        // console.log(enrollments.enrollments[0] );
        this.isEnrolled = enrollments.enrollments.some((enrollment: Enrollment) => enrollment.course_id === courseId);
      },
      (error) => {
        console.error('Failed to check enrollment:', error);
      }
    );
  }
  getDataOfStudent(id:string){
    this.studentService.getDataOfUser(id).subscribe(
      (response:any)=> {
        console.log("student response")
        console.log(response)
        this.student_id=response.id;

        this.checkEnrollment(this.student_id, this.course.id);

      },
      (error) => {
        console.error('courses error', error);
      }
    )
  }
  postComment(){
    const data = {
      student_id: this.student_id,
      course_id: this.courseId,
      review: this.reviewForm.get('review')?.value,
    };
    this.servesCourse.postComment(data).subscribe(
     (response: any) => {
      console.log('Comment posted successfully:', response);
      this.getReviews(this.courseId)
     },
     (error:any) => {
      console.error('Error posting comment:', error);
     }
    )
   }

   viewQuize(courseId:string|null){
    this.quizeService.getQuizeByCourseId(courseId).subscribe(
      (response: any) => {
        console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
       console.log('quize content', response);
       this.quize=response;
       console.log('quize content', this.quize);

      },
      (error:any) => {
       console.error('Error posting comment:', error);
      }
     )
   }




}
