import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Observable} from 'rxjs'

//Import Interfaces
import { Topic } from 'src/app/interfaces/Topic';

const httpOptions = {
  headers: new HttpHeaders({
    'content-type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class TopicService {
  //private apiUrl = 'http://localhost:8080/api/topic'
  private apiUrl = 'http://localhost:8080/topic'

  constructor(private http:HttpClient) { }

  addTopicSe(topic: Topic): Observable<Topic>{
    return this.http.post<Topic>(this.apiUrl, topic, httpOptions);
  }

  getTopicSe(): Observable<Topic[]>{
    return this.http.get<Topic[]>(this.apiUrl);
  }

}
