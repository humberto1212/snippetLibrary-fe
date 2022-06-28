import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ErrorSnippet } from 'src/app/interfaces/ErrorSnippet';
import { Topic } from 'src/app/interfaces/Topic';

//Import services
import { ErrorSnippetService } from 'src/app/services/errorSnippet/error-snippet.service';
import { TopicService } from 'src/app/services/topic/topic.service';

@Component({
  selector: 'app-error-contentboard',
  templateUrl: './error-contentboard.component.html',
  styleUrls: ['./error-contentboard.component.css']
})
export class ErrorContentboardComponent implements OnInit {

  errorSnippets: ErrorSnippet[] = [];
  topics: Topic[] = [];

  searchText = '';

  constructor(
    private errorSnippetService: ErrorSnippetService,
    private topicService: TopicService,
    private sanitizer:DomSanitizer,
  ) { }

  ngOnInit(): void {

    this.errorSnippetService.getErrorSnippetSe().subscribe((errorSnippets) => {


        function nl2br(str: any){
          let resultJump = str.replace(/(?:\r\n|\r|\n)/g, '<br>');
          let result = resultJump.replace(' ', '\n');
          return result;
       } 

       for(let i = 0; i < errorSnippets.length;i++){

        let newtextInp =  nl2br(errorSnippets[i].codeSnippet)

        errorSnippets[i].codeSnippet = this.sanitizer.bypassSecurityTrustHtml(newtextInp)

       }
       
       console.log(this.errorSnippets)

      this.errorSnippets = errorSnippets;

    })


    this.topicService.getTopicSe().subscribe((topic)=> {
      this.topics = topic
    });

  }

  deleteErrorSnippet(errorSnippet: ErrorSnippet){
    this.errorSnippetService.deleteErrorSnippetSe(errorSnippet).subscribe(() => (this.errorSnippets = this.errorSnippets.filter(e => e.id !== errorSnippet.id )))
  }
  
}
