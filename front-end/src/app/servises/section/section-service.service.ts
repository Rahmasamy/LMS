import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SectionServiceService {

  constructor(private http: HttpClient) { }
  protected apiUrl: any = 'http://127.0.0.1:8000/api';
  // {{url}}/api/section/addsection/add'

  AddSection(data:{}){
    const headers = {
      authorization: 'Bearer ' + localStorage.getItem('authToken'),
    };
    return this.http.post(`${this.apiUrl}/section/add`, data,{ headers })
  }
}
