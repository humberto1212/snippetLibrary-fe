import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Observable} from 'rxjs'


//Import Interfaces
import { ErrorSnippet } from 'src/app/interfaces/ErrorSnippet';

const httpOptions = {
  headers: new HttpHeaders({
    'content-type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class ErrorSnippetService {

    //private apiUrl = 'http://localhost:8080/api/errorSnippet'
    private apiUrl = 'http://localhost:8080/errorSnippet'

  constructor(private http:HttpClient) { }

  addErrorSnippetSe(errorSnippet: ErrorSnippet): Observable<ErrorSnippet>{
    return this.http.post<ErrorSnippet>(this.apiUrl, errorSnippet, httpOptions);
  }

  getErrorSnippetSe(): Observable<ErrorSnippet[]>{
    return this.http.get<ErrorSnippet[]>(this.apiUrl)
  }

  deleteErrorSnippetSe(errorSnippet: ErrorSnippet): Observable<ErrorSnippet>{
    const url = `${this.apiUrl}/${errorSnippet.id}`
    return this.http.delete<ErrorSnippet>(url)
  }
}
