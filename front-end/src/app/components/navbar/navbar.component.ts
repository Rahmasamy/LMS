import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RegisterService } from '../../servises/auth/register.service';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';

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
  role:string|null=''
  constructor(private serviseAuth: RegisterService,private router: Router) {
    this.checkLoginStatus();
  }
  ngOnInit(): void {

    this.checkLoginStatus();
    this.role=localStorage.getItem('role');
    console.log("RRRRRRRRRRRRRRRRRR")
    console.log(this.role);
    this.serviseAuth.token$.subscribe((token) => {
        this.token = token;
        console.log('Token changed:', token);
      });
    this.serviseAuth.role$.subscribe((role) => {
        this.role = role;
        console.log('role changed:', role);
      });

  }

  checkLoginStatus(): void {
    this.token = this.getToken();
    this.role=this.getRole();
    this.isLogin = this.token !== null;
  }


  getToken(): string | null {
    this.token = localStorage.getItem('authToken');

    return this.token;
  }
  getRole():string|null {
    this.role=localStorage.getItem('role');
    return this.role;
  }

  logout(): void {
    this.serviseAuth.removeToken();
    this.router.navigate(['' ]);

    this.isLogin = false;

  }
}
