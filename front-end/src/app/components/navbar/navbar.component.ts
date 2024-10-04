import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RegisterService } from '../../servises/auth/register.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, NgIf],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  isLogin: boolean = false;
  token: string | null = '';

  constructor(private serviseAuth: RegisterService) {
    this.checkLoginStatus();
  }
  ngOnInit(): void {

    this.checkLoginStatus();
  }
  // Check login status on initialization
  checkLoginStatus(): void {
    this.token = this.getToken();
    this.isLogin = this.token !== null; // Set isLogin to true if token exists
  }

  // Get the token from localStorage
  getToken(): string | null {
    this.token = localStorage.getItem('authToken');
    return this.token;
  }

  // Logout by removing the token and setting isLogin to false
  logout(): void {
    console.log('Logging out...');
    localStorage.removeItem('authToken');
    this.isLogin = false; // Set isLogin to false after logout
  }
}
