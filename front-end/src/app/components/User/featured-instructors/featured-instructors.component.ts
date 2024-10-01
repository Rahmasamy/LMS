import { Component } from '@angular/core';
import { CourseServiceService } from '../../../servises/User/Course/course-service.service';
import { InstructorSerService } from '../../../servises/User/InstructorFolder/instructor-ser.service';
import { Instructor,User } from '../../interface/UserInterface';

@Component({
  selector: 'app-featured-instructors',
  standalone: true,
  imports: [],
  templateUrl: './featured-instructors.component.html',
  styleUrl: './featured-instructors.component.css'
})
export class FeaturedInstructorsComponent {
  constructor(private instructorService: InstructorSerService) {}
  Instructor:Instructor[]=[];
  User!: User;
  instructors: { [key: string]: any } = {}
  ngOnInit(): void {
    this.instructorService.instructorOfCourse().subscribe(

      (response:any) => {
        console.log(response.data)
        this.Instructor=response.data
        // console.log("courses")
        // console.log(this.Instructor)
        const userId = this.Instructor[0].user_id;
      //  console.log('User ID:', userId);
        this.getDataOfInstructor(userId);

      },
      (error) => {
        console.error('courses error', error);
      }
    );


  }
  getRating(rating: string): number {
    return Math.floor(parseFloat(rating));
  }
  getDataOfInstructor(id:number){
    this.instructorService.getDataOFSpecificUser(id.toString()).subscribe(
      (response:any) => {
         this.User=response.data;
         console.log(this.User)


      },
      (error) => {
        console.error('courses error', error);
      }
    )
  }

}
