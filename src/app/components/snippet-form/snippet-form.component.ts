import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Snippet } from '../../interfaces/Snippet';

@Component({
  selector: 'app-snippet-form',
  templateUrl: './snippet-form.component.html',
  styleUrls: ['./snippet-form.component.css']
})
export class SnippetFormComponent implements OnInit {

  @Output() onAddSnippet: EventEmitter<Snippet> = new EventEmitter();

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

  constructor() { }

  ngOnInit(): void {
  }

}
