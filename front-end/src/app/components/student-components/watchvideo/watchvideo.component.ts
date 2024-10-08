import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { NotificationService } from '../../../services/notification.service';
import { CourseServiceService } from '../../../servises/User/Course/course-service.service';
import { InstructorSerService } from '../../../servises/User/InstructorFolder/instructor-ser.service';
import { StudentService } from '../../../servises/User/student/student/student.service';
import { UsernowService } from '../../../servises/userNow/usernow.service';
import { Review } from '../../interface/review-interface';
import { SectionInterface } from '../../interface/section-interface';
import { User } from '../../interface/UserInterface';
import { NgFor, NgIf } from '@angular/common';
import { Lesson } from '../../interface/lessonInterface';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-watchvideo',
  standalone: true,
  imports: [RouterLink,NgIf,NgFor],
  templateUrl: './watchvideo.component.html',
  styleUrl: './watchvideo.component.css'
})
export class WatchvideoComponent {
  lessonId: string | null = '';
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
  isEnrolled: boolean = false;
  lesson: Lesson = {
    course_id: 0,
    created_at: "",
    description: "",
    id: 0,
    section_id: 0,
    title: "",
    updated_at: "",
    video_path: ""
};
safeUrl: SafeResourceUrl | undefined;
  constructor(
    private servesCourse: CourseServiceService,
    private route: ActivatedRoute,
    private instructorService: InstructorSerService,
    private router: Router,
    private userService:UsernowService,private studentService:StudentService,
    private fb: FormBuilder,
    private notificationService:NotificationService,
    private sanitizer: DomSanitizer
  ) {
    this.reviewForm = this.fb.group({
      review: ['', Validators.required],
    });
  }

  ngOnInit() {

    this.courseId = this.route.snapshot.paramMap.get('courseId')!;
    this.lessonId = this.route.snapshot.paramMap.get('lessonId')!;
    this.showSingleCourse(this.courseId);
    this.showSectionsCourse(this.courseId);
    this.getInstructorOfCourse(this.courseId);
    this.initData();
    this.getReviews(this.courseId);
    this.getLessonsByCourse(this.courseId);
    this.getDataOfloggedUser();
    this.getLessonByLessonId(this.lessonId);
    this.getEmbedUrl(this.lesson.video_path);


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
//  this. getLessons(this.courseId)


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
   getDataOfloggedUser(){
    this.userService.getDataOfloggedUser().subscribe(
     (response:any)=> {


      //  this.getDataOfStudent(response.id)
     },
     (error:any) => {
       console.error('courses error', error);
     }
    )
   }
   getLessonByLessonId(id:string){
    this.servesCourse.getLessonById(id).subscribe(
      (response:any)=> {
        console.log("lesson")

       this.lesson=response.data;
       console.log(this.lesson)
       //  this.getDataOfStudent(response.id)
      },
      (error:any) => {
        console.error('courses error', error);
      }
     )
   }
   getEmbedUrl(videoUrl: string): SafeResourceUrl {
    const videoId = this.extractVideoId(videoUrl);
    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${videoId}`);
  }

  extractVideoId(url: string): string {
    const regExp = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^&\n]{11})/;
    const matches = url.match(regExp);
    return matches ? matches[1] : '';
  }
}
