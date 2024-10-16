import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InstructorSerService {

  protected apiUrl: any = 'http://127.0.0.1:8000/api';
  constructor(private http: HttpClient) { }
  getDataOFSpecificUser(id:any):Observable<any>{
    return this.http.get(`${this.apiUrl}/user/${id}`);

}
getInstructorData(id: number) {
  const headers = {
    authorization: 'Bearer ' + localStorage.getItem('authToken'),
  };


  return this.http.get(`${this.apiUrl}/instructors/show/${id}`, { headers });
}
instructorOfCourse(){

  return this.http.get(`${this.apiUrl}/instructors`);
}
getEnrolledCoursesForInst(instructorId:string){
  const headers = {
    authorization: 'Bearer ' + localStorage.getItem('authToken'),
  };
  return this.http.get(`${this.apiUrl}/instructor/${instructorId}/enrolled-courses`)
}
getInstructorByUserId(id:string){
  const headers = {
    authorization: 'Bearer ' + localStorage.getItem('authToken'),
  };


  return this.http.get(`${this.apiUrl}/instructor/user/${id}`, { headers });
}
getEnrolledCourseForInstructor(id:string){
  const headers = {
    authorization: 'Bearer ' + localStorage.getItem('authToken'),
  };


  return this.http.get(`${this.apiUrl}/instructor/${id}/enrolled-courses`, { headers });
}
}
