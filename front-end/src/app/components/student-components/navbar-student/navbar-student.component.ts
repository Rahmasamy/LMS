import { Component } from '@angular/core';
import { StudentDashbordComponent } from '../student-dashbord/student-dashbord.component';
import { StudentProfileComponent } from '../student-profile/student-profile.component';
import { StudentAnnouncementComponent } from '../student-announcement/student-announcement.component';
import { StudentAdminComponent } from '../student-admin/student-admin.component';
import { StudentComponent } from '../student/student.component';
import { StudentReviewsComponent } from '../student-reviews/student-reviews.component';
import { StudentQuestionAnswerComponent } from '../student-question-answer/student-question-answer.component';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { StudentService } from '../../../servises/User/student/student/student.service';
import { UsernowService } from '../../../servises/userNow/usernow.service';
import { RegisterService } from '../../../servises/auth/register.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-navbar-student',
  standalone: true,
  imports: [RouterLink,RouterOutlet,StudentDashbordComponent,StudentProfileComponent,
    StudentAnnouncementComponent,StudentComponent,StudentReviewsComponent,StudentQuestionAnswerComponent,NgIf],
  templateUrl: './navbar-student.component.html',
  styleUrl: './navbar-student.component.css'
})
export class NavbarStudentComponent {
  User: any = {} as any;
  Student: any = {} as any;
  bio:string=''
  isLogin: boolean = false;
  token: string | null = '';
  constructor(private userService:UsernowService,
    private studentService:StudentService,
    private serviseAuth: RegisterService,
    private router: Router,
  ){}
  ngOnInit(): void {
    this.getDataOfloggedUser();
    this.checkLoginStatus();
  }
  getDataOfloggedUser(){
    this.userService.getDataOfloggedUser().subscribe(
     (response:any)=> {
      console.log("user")
       console.log(response)
       this.User=response;
       this.getDataOfUser(response.id)
     },
     (error:any) => {
       console.error('courses error', error);
     }
    )
   }
   getDataOfUser(id:string){
     this.studentService.getDataOfUser(id).subscribe(
       (response:any)=> {
        console.log("?????????????????????????")
        console.log(response)
        this.Student=response;
        console.log(this.User.id);

        this.studentService.getDataOfStudentStudentId(this.Student.id).subscribe(
          (response:any)=> {
            console.log("student")
             console.log(response.data.bio)
             this.bio=response.data.bio;
           },
           (error:any) => {
             console.error('courses error', error);
           }
        )
        //  this.getEnrollemtCourses(response.student.id)
       },
       (error:any) => {
         console.error('courses error', error);
       }
     )
   }



  // Check login status on initialization
  checkLoginStatus(): void {
    this.token = this.getToken();
    this.isLogin = this.token !== null; // Set isLogin to true if token exists
  }

  // Get the token from localStorage
  getToken(): string | null {
    this.token = localStorage.getItem('authToken');
    return this.token;
  }

   logout(): void {
    console.log('Logging out...');
    localStorage.removeItem('authToken');
    this.router.navigate(['']);
    this.isLogin = false; // Set isLogin to false after logout
  }
}
