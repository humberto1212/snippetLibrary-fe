import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {
  topic?: string;

  @Output() onAddTopic: EventEmitter<string> = new EventEmitter();

  addTopic(){
    if(!this.topic){
      alert('please add a topic')
    }

    const newTopic = {
      topic: this.topic
    }

    this.onAddTopic.emit(newTopic);
    

  }

  constructor() { }

  ngOnInit(): void {
  }

}
