import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {

  addTopic(val: string){
    console.log(val)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
