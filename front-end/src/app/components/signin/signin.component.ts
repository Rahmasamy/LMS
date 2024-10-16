

import { RegisterService } from '../../servises/auth/register.service';
import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { NotificationService } from '../../services/notification.service';


@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'], // corrected 'styleUrl' to 'styleUrls'
})
export class SigninComponent implements OnInit {
  dataUser!: FormGroup; // FormGroup to handle the form
  error: string = '';   // Default error message is empty
  token: string | null = null;
  role: string | null = null;
  constructor(

    private registerService: RegisterService,
    private fb: FormBuilder,
    private router: Router,
    private notificationService:NotificationService

  ) {
    this.registerService.token$.subscribe((token) => {
      this.token = token;
      console.log('Token changed:', token);
    });
    this.registerService.role$.subscribe((role) => {
      this.role = role;
      console.log('role changed:', role);
    });
  }

  ngOnInit() {
    this.dataUser = this.fb.group({
      // name: ['', Validators.required], // Uncomment if you need 'name'
      email: ['', [Validators.required, Validators.email]], // Email validation
      password: ['', Validators.required],                  // Password is required
    });
  }

  onSubmitLogin() {
    if (this.dataUser.valid) {
      this.registerService.loginUser(this.dataUser.value).subscribe(
        (response) => {

          this.registerService.storeToken(response.token);
          this.registerService.makeRoleSubject(response.roles[0])
          console.log(response.roles)
          this.notificationService.showSuccess(
            `You have successfully Login.`,
            'Welcome'
          )
          this.router.navigate(['']);
        },
        (error) => {
          console.error('login error', error);
           this.error = error.error.msg || 'An error occurred during login'; // Set error message
           this.notificationService.showError(
            `Something went wrong during login. Please try again ${this.error}.`,
            'login Failed'
          );
        }
      );
    } else {
      this.error = 'Please fill in all fields correctly.';
    }
  }
}
