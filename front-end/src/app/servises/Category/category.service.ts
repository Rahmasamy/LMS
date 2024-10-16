import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }
  protected apiUrl: any = 'http://127.0.0.1:8000/api';


  AddCategory(data:{}){
    const headers = {
      authorization: 'Bearer ' + localStorage.getItem('authToken'),
    };
    return this.http.post(`${this.apiUrl}/categories/add`, data,{ headers })
  }
}
