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

  loginUser(userData: any): Observable<any> {
    console.log(userData);
    return this.http.post(this.apiUrl + 'login', userData);
  }
}
