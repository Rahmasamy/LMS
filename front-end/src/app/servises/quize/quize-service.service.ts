import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizeServiceService {

  private apiUrl = 'http://localhost:8000/api/quizzes';
  private apiQuesTion="http://localhost:8000/api"
  constructor(private http: HttpClient) {

   }

  getQuizzes(): Observable<any> {
    const headers = {
      authorization: 'Bearer ' + localStorage.getItem('authToken'),
    };
    return this.http.get(this.apiUrl,{headers});
  }

  createQuiz(quizData: any): Observable<any> {
    const headers = {
      authorization: 'Bearer ' + localStorage.getItem('authToken'),
    };
    return this.http.post(`${this.apiUrl}/add`, quizData,{headers});
  }


  getQuizById(id: number): Observable<any> {
    const headers = {
      authorization: 'Bearer ' + localStorage.getItem('authToken'),
    };
    return this.http.get(`${this.apiUrl}/show/${id}`,{headers});
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
  getQuizeByCourseId(course_id:string|null){
    const headers = {
      authorization: 'Bearer ' + localStorage.getItem('authToken'),
    };
    return this.http.get(`${this.apiUrl}/course/${course_id}`,{headers})
  }
  //Route::get('/quizzesResults', [QuizControllerr::class, 'setResult']);
  inserResultInQuizeResult(quizResult: any){
    const headers = {
      authorization: 'Bearer ' + localStorage.getItem('authToken'),
    };
    return this.http.post(`${this.apiUrl}/quizzesResults`,quizResult,{headers})
  }
// question/add
createQuestion(data: {}): Observable<any> {
  const headers = {
    authorization: 'Bearer ' + localStorage.getItem('authToken'),
  };
  return this.http.post(`${this.apiQuesTion}/question/add`, data,{headers});
}
getQuestionsByQuizeId(quizId:string): Observable<any> {
  const headers = {
    authorization: 'Bearer ' + localStorage.getItem('authToken'),
  };
  return this.http.get(`${this.apiQuesTion}/question/quiz/${quizId}`,{headers});
}



}
