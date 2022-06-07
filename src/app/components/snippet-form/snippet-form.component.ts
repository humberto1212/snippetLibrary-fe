//import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Snippet } from '../../interfaces/Snippet';

//Import services
import { TopicService } from 'src/app/services/topic/topic.service';
//Import Interfaces
import { Topic } from 'src/app/interfaces/Topic';

@Component({
  selector: 'app-snippet-form',
  templateUrl: './snippet-form.component.html',
  styleUrls: ['./snippet-form.component.css']
})
export class SnippetFormComponent implements OnInit {

  topics: Topic[] = []

  @Output() onAddSnippet: EventEmitter<Snippet> = new EventEmitter();

  constructor( private topicService: TopicService ) { }

  ngOnInit(): void {
    this.topicService.getTopicSe().subscribe((topics) => {
      this.topics = topics 
    })  
  }

  title?: string;
  description?: string;
  codeSnippet?: string;
  topic?: string;

  addSnippet(){

    if(!this.title){
      alert('please add a title');
      return
    }

    if(!this.description){
      alert('please add a description');
      return
    }

    if(!this.codeSnippet){
      alert('please add a codeSnipped');
      return
    }

    const newSnippet = {
      title: this.title,
      description: this.description,
      codeSnippet: this.codeSnippet,
      topic: this.topic
    }

    this.onAddSnippet.emit(newSnippet);

    this.title = ''
    this.description = ''
    this.codeSnippet = ''
    this.topic = ''

    console.log(newSnippet)
  } 

}
