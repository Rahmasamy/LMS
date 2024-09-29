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
instructorOfCourse(){

  return this.http.get(`${this.apiUrl}/instructors`);
}
}
