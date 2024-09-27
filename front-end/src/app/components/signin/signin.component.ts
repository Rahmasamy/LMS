import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RegisterService } from '../../servises/auth/register.service';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css',
})
export class SigninComponent {
  dataUser!: FormGroup; // Use the FormGroup type

  constructor(
    private registerService: RegisterService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.dataUser = this.fb.group({
      // name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmitLogin() {
    if (this.dataUser.valid) {
      this.registerService.loginUser(this.dataUser.value).subscribe(
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
