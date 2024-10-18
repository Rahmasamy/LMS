import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
// import { ReactiveFormsModule } from '@angular/forms';
import { RegisterService } from '../../servises/auth/register.service';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule], // Only ReactiveFormsModule is needed
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'], // Use styleUrls
})
export class SignupComponent implements OnInit {
  dataUser!: FormGroup; // Use the FormGroup type

  constructor(private registerService: RegisterService,
    private fb: FormBuilder,
    private notificationService:NotificationService
  ) {}

  ngOnInit() {
    this.dataUser = this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      phone_number: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      password_confirmation: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.dataUser.valid) {
      this.registerService.addUser(this.dataUser.value).subscribe(
        (response) => {
          console.log('User registered successfully', response);
          this.notificationService.showSuccess(
            `You have  Succcessfully Signup in our Website.`,
            'Registeration Successful'
          )
        },
        (error) => {
          console.error('Registration error', error);
          this.notificationService.showError(
            `Something went wrong during Registeration. Please try again.`,
            'Registeration Failed'
          );
        }
      );
    }
    else {
      this.notificationService.showError(
        `Something went wrong during Registeration. Please try again.`,
        'Invalid Vaildation,Registeration Failed'
      );

    }
  }

}
