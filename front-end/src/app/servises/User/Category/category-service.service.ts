import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CategoryServiceService {
  protected apiUrl: any = 'http://127.0.0.1:8000/api';
  constructor(private http: HttpClient) {}

  displayCategories(): Observable<any> {
    return this.http.get(`${this.apiUrl}/all-categories?per_page=10`);
  }
  displayCoursesOfCategory(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/categories/courses/${id}`);
  }

  getCategoryByInstructor(): Observable<any> {
    const headers = {
      authorization: 'Bearer ' + localStorage.getItem('authToken'),
    };
    return this.http.get(`${this.apiUrl}/all-categories`, { headers });
  }
}
