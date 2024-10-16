import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  protected apiUrl: any = 'http://127.0.0.1:8000/api/';
  private tokenSubject=new BehaviorSubject<string|null>(null)
  token$=this.tokenSubject.asObservable();
  private roleSubject=new BehaviorSubject<string|null>(null);
  role$=this.roleSubject.asObservable();
  constructor(private http: HttpClient) {

  }


  addUser(userData: any): Observable<any> {
    console.log(userData);
    return this.http.post(this.apiUrl + 'register', userData);
  }

  storeToken(token: string): void {
    this.tokenSubject.next(token);
    localStorage.setItem('authToken', token);
}
  makeRoleSubject(role:string){
    this.roleSubject.next(role);
    localStorage.setItem('role', role);
  }
  getRoleSubject() {
   return localStorage.getItem('role');

  }
  // Retrieve the token
  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  // Remove the token when logging out
  removeToken(): void {
    localStorage.removeItem('authToken');
    this.tokenSubject.next(null);
    this.roleSubject.next(null);
  }
  loginUser(userData: any): Observable<any> {
    console.log(userData);
    return this.http.post(this.apiUrl + 'login', userData);
  }
}
