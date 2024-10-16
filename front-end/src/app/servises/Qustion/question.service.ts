import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  private apiUrl = 'http://localhost:8000/api/quizzes';

  constructor(private http: HttpClient) {

   }

  getQuestions(): Observable<any> {
    const headers = {
      authorization: 'Bearer ' + localStorage.getItem('authToken'),
    };
    return this.http.get(this.apiUrl,{headers});
  }

  createQuestion(quizData: any): Observable<any> {

    const headers = {
      authorization: 'Bearer ' + localStorage.getItem('authToken'),
    };
    return this.http.post(`${this.apiUrl}/question/add`, quizData,{headers});
  }
  
  getQuizById(id: number): Observable<any> {
    const headers = {
      authorization: 'Bearer ' + localStorage.getItem('authToken'),
    };
    return this.http.get(`${this.apiUrl}/question/show/${id}`,{headers});
  }

  updateQuiz(id: number, quiz: any): Observable<any> {
    const headers = {
      authorization: 'Bearer ' + localStorage.getItem('authToken'),
    };
    return this.http.put(`${this.apiUrl}/update/${id}`, quiz,{headers});
  }

  deleteQuiz(id: number): Observable<any> {
    const headers = {
      authorization: 'Bearer ' + localStorage.getItem('authToken'),
    };
    return this.http.delete(`${this.apiUrl}/delete/${id}`,{headers});
  }
}
