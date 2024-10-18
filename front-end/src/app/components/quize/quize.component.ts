import { Component } from '@angular/core';
import { QuizeServiceService } from '../../servises/quize/quize-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { Quiz } from '../interface/coursesInterface';
import { FormGroup, FormsModule,FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { StudentService } from '../../servises/User/student/student/student.service';
import { UsernowService } from '../../servises/userNow/usernow.service';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-quize',
  standalone: true,
  imports: [NgFor,NgIf,FormsModule,ReactiveFormsModule],
  templateUrl: './quize.component.html',
  styleUrl: './quize.component.css'
})
export class QuizeComponent {
  quize:Quiz | null = null;
  courseId:string|null='';
  student_id:number=0;
  isSubmitted: boolean = false;
  quizeForm:FormGroup;
  showQuestionForm:boolean=false;
  role:string| null=''
  userAnswers: { [key: number]: string } = {};
  constructor( private quizeService:QuizeServiceService,
     private userService:UsernowService,
     private studentService:StudentService,
      private route: ActivatedRoute,
      private notificationService:NotificationService,
      private fb: FormBuilder
    ){
      this.quizeForm = this.fb.group({
        quize_id:['',Validators.required],
        question: ['', [Validators.required]],
        correct_answer: ['', Validators.required],
        options: ['', [Validators.required, this.validateOptions]]
      });
  }
  validateOptions(control: any) {
    const value = control.value;
    const options = value.split(',');
    return options.length >= 2 ? null : { invalidOptions: true };
  }
  ngOnInit() {

    this.route.paramMap.subscribe((params) => {
      this.courseId = params.get('courseId');
    });
    this.viewQuize(this.courseId);
    this.getDataOfloggedUser();
    this. getRole();

  }
  getDataOfStudent(id:string){
    this.studentService.getDataOfUser(id).subscribe(
      (response:any)=> {

        this.student_id=response.id;
        console.log("student iddddddddddddddddddd")
        console.log(this.student_id)
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
       console.log("quize",response)
       this.quizeForm.patchValue({ quize_id:response.id})
       this. getQuestionsByQuizeId(response.id)


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
   getQuestionsByQuizeId(id:string){
    this.quizeService.getQuestionsByQuizeId(id).subscribe(
      (response)=>{
        console.log("question for quize")
         console.log(response)
      },
      (error)=>{
        console.log(error)
      }
    )
  }
  addquestion(){
    this.showQuestionForm=!this.showQuestionForm
  }

  QuestionSubmit(){
    console.log(this.quizeForm.value);
   if(this.quizeForm.valid){
    let quizeFormV2=this.quizeForm.value;
    const optionsArray = quizeFormV2.options.split(',').map((opt: string) => opt.trim());
    console.log("options Array",optionsArray);
    const questionData = {
      question: quizeFormV2.question,
      correct_answer: quizeFormV2.correct_answer,
      options: optionsArray,
      quize_id:quizeFormV2.quize_id
    };
    console.log(questionData);

    this.quizeService.createQuestion(questionData).subscribe(
      (response) => {
          console.log("qustion added successfully:", response);
          this.notificationService.showSuccess(
            `You have successfully add the question.`,
            'Adding question Successfully'
          )
          this.showQuestionForm = false;
          console.log("show quize");
          // this.getLessonsByCourse(this.courseId);
          this. viewQuize(this.courseId)
      },
      (error) => {
        this.notificationService.showError(
          'Form Validation Failed',
          'Adding question Failed'
        );
      }
  );
}

   else {
    this.notificationService.showError(
      `Form is not valid:', ${this.quizeForm.errors}`,
      'Adding quize Failed'
    );

  }



  }
  getRole():string|null {
    this.role=localStorage.getItem('role');
    return this.role;
  }
}
