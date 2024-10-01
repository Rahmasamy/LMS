import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CourseServiceService {
  protected apiUrl: any = 'http://127.0.0.1:8000/api';
  // /api/courses/show/1

  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  constructor(private http: HttpClient) {}
  displayCourses(): Observable<any> {
    return this.http.get(`${this.apiUrl}/all-courses?per_page=10`);
  }
  
  instructorOfCourse(id: string) {
    return this.http.get(`${this.apiUrl}/instructor/course/${id}`);
  }

  showSingleCourse(id: string | any) {
    console.log(id ,"Servisse")
    const headers = {
      authorization: 'Bearer ' + localStorage.getItem('authToken'),
    };
    return this.http.get(`${this.apiUrl}/courses/show/${id}`, { headers });
  }



  showSectionsCourse(id: string | any) {
    console.log(id ,"sections")
    const headers = {
      authorization: 'Bearer ' + localStorage.getItem('authToken'),
    };
    return this.http.get(`${this.apiUrl}/course/sections/${id}`, { headers });
  }


}
