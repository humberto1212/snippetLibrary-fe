import { Component, OnInit } from '@angular/core';
import { Snippet } from 'src/app/interfaces/Snippet';

//Import services
import { SnippetService } from 'src/app/services/snippet/snippet.service';

@Component({
  selector: 'app-contentboard',
  templateUrl: './contentboard.component.html',
  styleUrls: ['./contentboard.component.css']
})
export class ContentboardComponent implements OnInit {

  snippets: Snippet[] = [];



  constructor(
    private snippetService: SnippetService
  ) { }

  ngOnInit(): void {
    this.snippetService.getSnippetSe().subscribe((snippets)=> {
      this.snippets = snippets
    })  
  }

}
