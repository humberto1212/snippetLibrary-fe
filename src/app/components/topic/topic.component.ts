import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Topic } from 'src/app/interfaces/Topic';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {
  topic?: string;

  @Output() onAddTopic: EventEmitter<Topic> = new EventEmitter();

  addTopic(){
    if(!this.topic){
      alert('please add a topic')
    }

    const newTopic = {
      topic: this.topic
    }

    this.onAddTopic.emit(newTopic);

    this.topic = '';
    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
