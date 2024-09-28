import { RegisterService } from './../../servises/auth/register.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

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

  constructor(
    private registerService: RegisterService, // Corrected the service injection
    private fb: FormBuilder
  ) {}

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
        (response: any) => {
          console.log('User login successful', response);
          // Store token in localStorage
          localStorage.setItem('dataUser', JSON.stringify(response.token));
        },
        (error: any) => {
          console.error('Login error', error);
          this.error = error.error.msg || 'An error occurred during login'; // Set error message
        }
      );
    } else {
      this.error = 'Please fill in all fields correctly.';
    }
  }
}
