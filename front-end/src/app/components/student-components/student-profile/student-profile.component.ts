import { Component } from '@angular/core';
import { StudentService } from '../../../servises/User/student/student/student.service';
import { UsernowService } from '../../../servises/userNow/usernow.service';
import {User} from '../../interface/UserInterface';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-student-profile',
  standalone: true,
  imports: [NgFor],
  templateUrl: './student-profile.component.html',
  styleUrl: './student-profile.component.css'
})
export class StudentProfileComponent {
  User: any = {} as any;
  bio:string=''
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
             console.log(response.data.bio)
             this.bio=response.data.bio;
           },
           (error:any) => {
             console.error('courses error', error);
           }
        )
        //  this.getEnrollemtCourses(response.student.id)
       },
       (error) => {
         console.error('courses error', error);
       }
     )
   }
}
