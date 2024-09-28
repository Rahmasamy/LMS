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

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule], // Only ReactiveFormsModule is needed
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'], // Use styleUrls
})
export class SignupComponent implements OnInit {
  dataUser!: FormGroup; // Use the FormGroup type

  constructor(private registerService: RegisterService, private fb: FormBuilder) {}

  ngOnInit() {
    this.dataUser = this.fb.group({
      first_name: ['', Validators.required],
      last: ['', Validators.required],
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
        },
        (error) => {
          console.error('Registration error', error);
        }
      );
    }
  }
}
