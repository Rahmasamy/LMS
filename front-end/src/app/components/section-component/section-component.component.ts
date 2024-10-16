import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { NotificationService } from '../../services/notification.service';
import { QuizeServiceService } from '../../servises/quize/quize-service.service';
import { CourseServiceService } from '../../servises/User/Course/course-service.service';
import { InstructorSerService } from '../../servises/User/InstructorFolder/instructor-ser.service';
import { StudentService } from '../../servises/User/student/student/student.service';
import { UsernowService } from '../../servises/userNow/usernow.service';
import { Enrollment } from '../interface/enrollmentInterface';
import { SectionInterface } from '../interface/section-interface';
import { User } from '../interface/UserInterface';
import { NgFor, NgIf } from '@angular/common';
import { SectionServiceService } from '../../servises/section/section-service.service';
import { LessonServiceService } from '../../servises/Lesson/lesson-service.service';


@Component({
  selector: 'app-section-component',
  standalone: true,
  imports: [RouterLink,NgIf,NgFor,ReactiveFormsModule],
  templateUrl: './section-component.component.html',
  styleUrl: './section-component.component.css'
})
export class SectionComponentComponent {
  courseId: string | null = '';
  course: any = {};
  Sections: SectionInterface[] = [];
  data: boolean = false;
  userId: string|null='';
  instructors: any;
  User: User|any;
  courseBenefits: string[] = [];
  reguiremnets: string[] = [];

  courseLessons: any;
  student_id:number=0
  EnrollmentMessage:string=''

  quize:any;
  isEnrolled: boolean = false;
  coursePrice:string=""
  showAddSectionForm = false;
  sectionForm: FormGroup;
  showAddLessonForm = false;
  LessonForm: FormGroup;
  sectionId:string=''
  quizeForm: FormGroup;
  showAddQuizeForm = false;
  constructor(
    private servesCourse: CourseServiceService,
    private route: ActivatedRoute,
    private instructorService: InstructorSerService,
    private router: Router,
    private userService:UsernowService,private studentService:StudentService,
    private fb: FormBuilder,
    private notificationService:NotificationService,
    private quizeService:QuizeServiceService,
    private sectionService:SectionServiceService,
    private LessonService:LessonServiceService,

  ) {
    this.route.paramMap.subscribe((params) => {
      this.courseId = params.get('courseId');
    });
    this.sectionForm = this.fb.group({
      title: [''],
      description: [''],
      course_id: [this.courseId],

    });

    this.LessonForm = this.fb.group({
      title: [''],
      descrption: [''],
      course_id: [this.courseId],
      section_id:[this.sectionId],
      video_path:['']

    });
    this.quizeForm = this.fb.group({
      title: ['', Validators.required],
      total_marks: ['', [Validators.required]],
      duration: ['', [Validators.required, ]],
      course_id:[this.courseId],
    });

  }
  setSectionId(sectionId:string){
    console.log("SSS",sectionId);
    this.sectionId=sectionId
    return sectionId
 }

  ngOnInit() {

    this.route.paramMap.subscribe((params) => {
      this.courseId = params.get('courseId');
    });

    this.showSingleCourse(this.courseId);
    this.showSectionsCourse(this.courseId);
    this.getInstructorOfCourse(this.courseId);
    this.initData();
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
        console.log(this.Sections)

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

   getLessonsByCourse(courseId: string|null) {
     this.servesCourse.getCourseWithLessons(courseId).subscribe(
       (response: any) => {

         this.courseLessons=response
         console.log("courses lessons")
        console.log(this.courseLessons);
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

   addSectionOrCourse() {

    console.log('Add Section or Course button clicked!');
    this.showAddSectionForm = !this.showAddSectionForm;
  }
  submitSection() {
    if (this.sectionForm.valid) {
        console.log('Form Data:', this.sectionForm.value); // Log form data
        this.sectionService.AddSection(this.sectionForm.value).subscribe(
            (response) => {
                console.log("Section added successfully:", response);
                this.notificationService.showSuccess(
                  `You have successfully add the section.`,
                  'Adding Section Successfully'
                )
                this.showAddSectionForm = false;
                console.log("show sections")
                this.getLessonsByCourse(this.courseId);
            },
            (error) => {
              this.notificationService.showError(
                'Form Validation Failed',
                'Adding Section Failed'
              );
            }
        );
    } else {
        console.log('Form is not valid:', this.sectionForm.errors); // Log form validation errors
    }
}
addLesson() {
  console.log('Add Section or Course button clicked!');
  this.showAddLessonForm = !this.showAddLessonForm;
}
submitLesson(){
  console.log("submittinh");
  this.LessonForm.patchValue({ section_id: this.sectionId });
  if (this.LessonForm.valid) {
    console.log('Form Data:', this.LessonForm.value);
    this.LessonService.AddLessson(this.LessonForm.value).subscribe(
        (response) => {
            console.log("Section added successfully:", response);
            this.notificationService.showSuccess(
              `You have successfully add the lesson.`,
              'Adding lesson Successfully'
            )
            this.showAddLessonForm = false;
            console.log("show sections")
            this.getLessonsByCourse(this.courseId);

        },
        (error) => {
          this.notificationService.showError(
            'Form Validation Failed',
            'Adding Section Failed'
          );
        }
    );
} else {
  this.notificationService.showError(
    `Form is not valid:', ${this.LessonForm.errors}`,
    'Adding Lesson Failed'
  );

}
}
addquiz(){
  this.showAddQuizeForm = !this.showAddQuizeForm;
}
QuizeSubmit(){
  console.log("quize data submited")
  console.log(this.quizeForm.value)

  if (this.quizeForm.valid) {
    console.log('Form Data:', this.quizeForm.value);
    this.quizeService.createQuiz(this.quizeForm.value).subscribe(
        (response) => {
            console.log("quiz added successfully:", response);
            this.notificationService.showSuccess(
              `You have successfully add the quize.`,
              'Adding quize Successfully'
            )
            this.showAddQuizeForm = false;
            console.log("show quize")
            this.getLessonsByCourse(this.courseId);
            this.viewQuize(this.courseId)
        },
        (error) => {
          this.notificationService.showError(
            'Form Validation Failed',
            'Adding quize Failed'
          );
        }
    );
} else {
  this.notificationService.showError(
    `Form is not valid:', ${this.quizeForm.errors}`,
    'Adding quize Failed'
  );

}
}
}
