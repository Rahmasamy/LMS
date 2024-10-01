import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  protected apiUrl: any = 'http://127.0.0.1:8000/api/';

  constructor(private http: HttpClient) {}

  // Method to send data to the API
  addUser(userData: any): Observable<any> {
    console.log(userData);
    return this.http.post(this.apiUrl + 'register', userData);
  }
  // Call this method after a successful login
  storeToken(token: string): void {
    localStorage.setItem('authToken', token); // Store the token in localStorage
  }

  // Retrieve the token
  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  // Remove the token when logging out
  removeToken(): void {
    localStorage.removeItem('authToken');
  }
  loginUser(userData: any): Observable<any> {
    console.log(userData);
    return this.http.post(this.apiUrl + 'login', userData);
  }
}
