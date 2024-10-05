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
  userId: string|null='';
  instructors: any;
  User: User|any;
  courseBenefits: string[] = [];
  reguiremnets: string[] = [];
  reviews: Review[] = [];
  courseLessons: any;
  student_id:number=0
  EnrollmentMessage:string=''
  constructor(
    private servesCourse: CourseServiceService,
    private route: ActivatedRoute,
    private instructorService: InstructorSerService,
    private router: Router,
    private userService:UsernowService,private studentService:StudentService
  ) {

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
        console.log("courses")
        console.log(this.course);
        this.course ? (this.data = true) : (this.data = false);
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


  enroll(studentId:any, courseId:any, paymentStatus:any) {
    this.servesCourse.enroll( courseId,studentId, paymentStatus).subscribe(
      (response) => {
        console.log('Enrollment successful:', response);
        console.log('enrollment mess',response.enrollment.payment_status)
        this.router.navigate([`/courses/course-details/${this.course.id}/${response.enrollment.payment_status}`]);

      },
      (error) => {
        console.error('Enrollment failed:', error);

      }
    );
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
  getDataOfStudent(id:string){
    this.studentService.getDataOfUser(id).subscribe(
      (response:any)=> {

        this.student_id=response.student.id;
        console.log(this.student_id);

      },
      (error) => {
        console.error('courses error', error);
      }
    )
  }
}
