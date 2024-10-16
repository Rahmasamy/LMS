import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from '../../../services/notification.service';
import { CourseServiceService } from '../../../servises/User/Course/course-service.service';
import { NgIf } from '@angular/common';
import { UsernowService } from '../../../servises/userNow/usernow.service';
import { StudentService } from '../../../servises/User/student/student/student.service';

@Component({
  selector: 'app-payment-course',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,NgIf],
  templateUrl: './payment-course.component.html',
  styleUrl: './payment-course.component.css'
})
export class PaymentCourseComponent {
  addressForm: FormGroup;
  paymentForm: FormGroup;
  courseId: string | null = '';
  student_id:string=''

  constructor(
    private CourseService: CourseServiceService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private notificationService:NotificationService,
    private userService:UsernowService,private studentService:StudentService,

  )  {
    this.route.paramMap.subscribe((params) => {
      this.courseId = params.get('id');
    });
    this.addressForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', Validators.required],
      phoneNumber: ['', [Validators.pattern(/^[0-9]*$/), Validators.minLength(10), Validators.maxLength(15)]],
      addressLine1: ['', Validators.required],
      addressLine2: [''],
      state: ['', Validators.required],
      country: ['', Validators.required],
      zipCode: ['', [Validators.required]]
    });

    this.paymentForm = this.fb.group({
      paymentMethod: ['credit', Validators.required],
      cardNumber: ['', [Validators.required, Validators.pattern(/^\d{16}$/)]],
      expiryMonth: ['', [Validators.required, Validators.pattern(/^(0[1-9]|1[0-2])$/)]],
      expiryYear: ['', [Validators.required, Validators.pattern(/^(20\d{2})$/)]],
      cvv: ['', [Validators.required, Validators.pattern(/^\d{3}$/)]],
      nameOnCard: ['', Validators.required]
    });

    }
    ngOnInit(){
      this.getDataOfloggedUser();
    }
    getDataOfStudent(id:string){
      this.studentService.getDataOfUser(id).subscribe(
        (response:any)=> {
          console.log("student response")
          console.log(response)
          this.student_id=response.id;
          console.log("student id")
          console.log(this.student_id);


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
  postPayment() {
    if (this.addressForm.valid) {
      console.log('Billing Address:', this.addressForm.value);
    } else {
      console.log('Address Form is invalid');
      this.addressForm.markAllAsTouched();
    }
    if (this.paymentForm.valid) {
      console.log('Payment Details:', this.paymentForm.value);

    } else {
      console.log('Payment Form is invalid');
      this.paymentForm.markAllAsTouched();
    }
    const data = {
      stripeToken: 'tok_visa',
      course_id: this.courseId,
      student_id: this.student_id,
      billing_details: {
        address: {
          line1: this.addressForm.get('addressLine1')?.value,
          line2: this.addressForm.get('addressLine2')?.value,
          city: 'Anytown', // Add a field for city if needed
          state: this.addressForm.get('state')?.value,
          postalcode: this.addressForm.get('zipCode')?.value,
          country: this.addressForm.get('country')?.value
        },
        email: this.addressForm.get('email')?.value || 'student@example.com',
        firstname: this.addressForm.get('firstName')?.value,
        lastname: this.addressForm.get('lastName')?.value,
        phone: this.addressForm.get('phoneNumber')?.value,
        nameoncard: this.paymentForm.get('nameOnCard')?.value,
        month: this.paymentForm.get('expiryMonth')?.value,
        year: this.paymentForm.get('expiryYear')?.value,
        cvv: this.paymentForm.get('cvv')?.value,
        cardNumber: this.paymentForm.get('cardNumber')?.value
      }
    };
    console.log(data)

    this.CourseService.postPayment(data).subscribe(
      (response: any) => {
        console.log("response ...", response);
        this.notificationService.showSuccess(
          `You have successfully enrolled in the course.`,
          'Enrollment Successful'
        )
      },
      (error) => {
        console.error("error....", error);
        this.notificationService.showError(
          'Something went wrong during enrollment. Please try again.',
          'Enrollment Failed'
        );
      }
    );
  }
}
