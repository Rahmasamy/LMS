import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  instructorOfCourse(id: string|any) {
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
  getCourseReviews(courseId: string|null): Observable<any> {
    const headers = {
      authorization: 'Bearer ' + localStorage.getItem('authToken'),
    };
    const url = `${this.apiUrl}/reviews/course/${courseId}`;
    return this.http.get(url,{headers});
  }
  getCourseWithLessons(courseId: string|null): Observable<any> {
    const headers = {
      authorization: 'Bearer ' + localStorage.getItem('authToken'),
    };

  //  console.log(`${this.apiUrl}/courses/${courseId}/lessons`);
    return this.http.get(`${this.apiUrl}/courses/${courseId}/lessons`,{headers});
  }

  enroll(studentId: number, courseId: number, paymentStatus: string): Observable<any> {
    const enrollmentData = {
      student_id: studentId,
      course_id: courseId,
      payment_status: paymentStatus,
    };

    return this.http.post(`${this.apiUrl}/enroll`, enrollmentData, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        authorization: 'Bearer ' + localStorage.getItem('authToken'),
      }),
    });
  }

}
