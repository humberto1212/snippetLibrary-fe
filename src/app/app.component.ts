import { Component } from '@angular/core';
import { SnippetService } from './services/snippet.service';
import { Snippet } from './interfaces/Snippet';
import { Topic } from './interfaces/Topic';
import { TopicService } from './services/topic/topic.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  snippets: Snippet[] = []
  topic: Topic[] = []
  
  constructor(
    private snippetService: SnippetService,
    private topicService: TopicService
    ) { }

  addTopicPa(topic: Topic) {
    this.topicService.addTopicSe(topic).subscribe((topic) => this.topic.push(topic));
  }

  addSnippetPa(snippet: Snippet) {
    this.snippetService.addSnippetSe(snippet).subscribe((snippet) => this.snippets.push(snippet));
  }

}
