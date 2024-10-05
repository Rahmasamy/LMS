import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  protected apiUrl: any = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) { }
  getDataOfUser(id:string){

    const headers = {
      authorization: 'Bearer ' + localStorage.getItem('authToken'),
    };
    return this.http.get(`${this.apiUrl}/user/${id}/student`, { headers });
  }
  getDataOfStudentStudentId(studentId:string){
    const headers = {
      authorization: 'Bearer ' + localStorage.getItem('authToken'),
    };
    return this.http.get(`${this.apiUrl}/students/show/${studentId}`, { headers });

  }
  getRecentlyEnrolledCourse(studentId:string) {
    const headers = {
      authorization: 'Bearer ' + localStorage.getItem('authToken'),
    };
    return this.http.get(`${this.apiUrl}/students/${studentId}/recent-enrollments`, { headers });
  }
  getReviewOfStudent(userId:string){
    const headers = {
      authorization: 'Bearer ' + localStorage.getItem('authToken'),
    };
    return this.http.get(`${this.apiUrl}/reviews/user/${userId}`, { headers });
   }

  }

