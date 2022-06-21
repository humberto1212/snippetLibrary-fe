import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Snippet } from 'src/app/interfaces/Snippet';
import { Topic } from 'src/app/interfaces/Topic';

//Import services
import { SnippetService } from 'src/app/services/snippet/snippet.service';
import { TopicService } from 'src/app/services/topic/topic.service';

@Component({
  selector: 'app-contentboard',
  templateUrl: './contentboard.component.html',
  styleUrls: ['./contentboard.component.css']
})
export class ContentboardComponent implements OnInit {

  snippets: Snippet[] = [];
  topics: Topic[] = [];



  constructor(
    private snippetService: SnippetService,
    private topicService: TopicService,
    private dialog : MatDialog
  ) { }

  ngOnInit(): void {
    this.snippetService.getSnippetSe().subscribe((snippets)=> {
      this.snippets = snippets
    });  

    this.topicService.getTopicSe().subscribe((topic)=> {
      this.topics = topic
    });
    
  }


}
