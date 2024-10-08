import { Component } from '@angular/core';
import { QuizeServiceService } from '../../servises/quize/quize-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { Quiz } from '../interface/coursesInterface';
import { FormsModule } from '@angular/forms';
import { StudentService } from '../../servises/User/student/student/student.service';
import { UsernowService } from '../../servises/userNow/usernow.service';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-quize',
  standalone: true,
  imports: [NgFor,NgIf,FormsModule],
  templateUrl: './quize.component.html',
  styleUrl: './quize.component.css'
})
export class QuizeComponent {
  quize:Quiz | null = null;
  courseId:string|null='';
  student_id:number=0;
  isSubmitted: boolean = false;
  userAnswers: { [key: number]: string } = {};
  constructor( private quizeService:QuizeServiceService,
     private userService:UsernowService,
     private studentService:StudentService,
      private route: ActivatedRoute,
      private notificationService:NotificationService
    ){

  }
  ngOnInit() {

    this.route.paramMap.subscribe((params) => {
      this.courseId = params.get('courseId');
    });
    this.viewQuize(this.courseId);
    this.getDataOfloggedUser();

  }
  getDataOfStudent(id:string){
    this.studentService.getDataOfUser(id).subscribe(
      (response:any)=> {

        this.student_id=response.student.id;
        // this.checkEnrollment(this.student_id, this.course.id);

      },
      (error) => {
        console.error('courses error', error);
      }
    )
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
  viewQuize(courseId:string|null){
    this.quizeService.getQuizeByCourseId(courseId).subscribe(
      (response: any) => {

       this.quize=response;


      },
      (error:any) => {
       console.error('Error posting comment:', error);
      }
     )
   }
   submitQuiz(quizId: number): void {

    if (this.isSubmitted) {
      this.notificationService.showError(
        'You have already submitted this quiz!',
        'Submission Failed'
      );

      return;
    }

    let score = 0;
    for (let question of this.quize!.questions) {
        const userAnswer = this.userAnswers[question.id];
        if (userAnswer === question.correct_answer) {
            score++;
        }
    }

    const totalQuestions = this.quize!.questions.length;
    const percentage = (score / totalQuestions) * 100;

    console.log("student id",this.student_id)
    console.log("quize_id",quizId);
    console.log(percentage)

    this.quizeService.inserResultInQuizeResult({

      quize_id:quizId,
      score:percentage,
      student_id:this.student_id,
    }).subscribe(
      (response: any) => {

       console.log(response)
       this.notificationService.showSuccess(
        `click Ok to submit quize! `,
        `Your score: ${score} out of ${totalQuestions} (${percentage.toFixed(2)}%)`

      )
      this.isSubmitted = true;

       },
       (error:any) => {
        console.error('Error inserting into quize result:', error);
        this.notificationService.showError(
          'Something went wrong during enrollment. Please try again.',
          'Enrollment Failed'
        );
       }
      )


  }
}
