import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Observable} from 'rxjs'

//Import Interfaces
import { Snippet } from '../../interfaces/Snippet';

const httpOptions = {
  headers: new HttpHeaders({
    'content-type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class SnippetService {

  private apiUrl = 'http://localhost:8080/api/snippet'
  //private apiUrl = 'http://localhost:8080/snippet'

  constructor(private http:HttpClient) { }

  addSnippetSe(snippet: Snippet): Observable<Snippet>{
    return this.http.post<Snippet>(this.apiUrl, snippet, httpOptions);
  }

  getSnippetSe(): Observable<Snippet[]>{
    return this.http.get<Snippet[]>(this.apiUrl)
  }

  deleteSnippedSe(snippet: Snippet): Observable<Snippet>{
    const url = `${this.apiUrl}/${snippet.id}`;
    return this.http.delete<Snippet>(url)
  }

}
