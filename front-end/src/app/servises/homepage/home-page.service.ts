import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomePageService {
  protected apiUrl: any = 'http://127.0.0.1:8000/api/';
  private token: any = localStorage.getItem('dataUser');

  constructor(private http: HttpClient) {}

  getAllCategories(): Observable<any> {
    console.log(this.token);
    const headers = new HttpHeaders({
      Authorization: `Bearer 20|vynI4y5U5lrh8ZxKRaECagVP3b0O6Io6yqerX9jF79ef1279`,
    });
    return this.http.get(this.apiUrl + 'categories', { headers });
  }
}
