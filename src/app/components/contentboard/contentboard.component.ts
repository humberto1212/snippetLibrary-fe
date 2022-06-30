import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatDialog } from '@angular/material/dialog';
import { Snippet } from 'src/app/interfaces/Snippet';
import { Topic } from 'src/app/interfaces/Topic';


//Import services
import { SnippetService } from 'src/app/services/snippet/snippet.service';
import { TopicService } from 'src/app/services/topic/topic.service';


@Component({
  selector: 'app-contentboard',
  templateUrl: './contentboard.component.html',
  styleUrls: ['./contentboard.component.css'],
})
export class ContentboardComponent implements OnInit {

  snippets: Snippet[] = [];
  topics: Topic[] = [];

  //Search Var
  searchText = '';
  //searchTopic = '';



  constructor(
    private snippetService: SnippetService,
    private topicService: TopicService,
    private sanitizer:DomSanitizer,

  ) { }

  ngOnInit(): void {
    this.snippetService.getSnippetSe().subscribe((snippets)=> {

      function nl2br(str: any){
        let resultJump = str.replace(/(?:\r\n|\r|\n)/g, '<br>');
        let result = resultJump.replace(' ', '\n');
        return result;
     } 

     for(let i = 0; i < snippets.length;i++){

      let newtextInp =  nl2br(snippets[i].codeSnippet)

      snippets[i].codeSnippet = this.sanitizer.bypassSecurityTrustHtml(newtextInp)

     }
     
     console.log(this.snippets)

    this.snippets = snippets;

      //this.snippets = snippets
    });  

    this.topicService.getTopicSe().subscribe((topic)=> {
      this.topics = topic
    });
    
  }

  deleteSnippet(snippet: Snippet){
    this.snippetService.deleteSnippedSe(snippet).subscribe(() => (this.snippets = this.snippets.filter(s => s.id !== snippet.id)))
  }

}
