import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsernowService {
  protected apiUrl: any = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) { }
  getDataOfloggedUser(){
    const headers = {
      authorization: 'Bearer ' + localStorage.getItem('authToken'),
    };
    return this.http.get(`${this.apiUrl}/user`, { headers });
  }
}
