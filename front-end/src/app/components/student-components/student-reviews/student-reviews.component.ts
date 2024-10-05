import { Component } from '@angular/core';
import { StudentService } from '../../../servises/User/student/student/student.service';
import { UsernowService } from '../../../servises/userNow/usernow.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-student-reviews',
  standalone: true,
  imports: [NgFor],
  templateUrl: './student-reviews.component.html',
  styleUrl: './student-reviews.component.css'
})
export class StudentReviewsComponent {
  User: any = {} as any;
  bio:string=''
  reviews:any[]=[]
  constructor(private userService:UsernowService,private studentService:StudentService){}
  ngOnInit(): void {
    this.getDataOfloggedUser()
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

        this.User=response;
        console.log(this.User.student.id)
        this.studentService.getDataOfStudentStudentId(this.User.student.id).subscribe(
          (response:any)=> {
            console.log("student")
             console.log(response.data.id)
             this.studentService.getReviewOfStudent(response.data.id).subscribe(
              (response:any)=>{

                this.reviews=response;
                console.log(this.reviews);
              },
              (error:any)=>{
                console.error('courses error', error);
              }
             )


           },
           (error:any) => {
             console.error('courses error', error);
           }
        )
      
       },
       (error) => {
         console.error('courses error', error);
       }
     )
   }
}
