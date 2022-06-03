import { Component } from '@angular/core';
import { SnippetService } from './services/snippet.service';
import { Snippet } from './interfaces/Snippet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  snippets: Snippet[] = []
  
  constructor(private snippetService: SnippetService) { }

  addSnippet(snippet: Snippet) {
    this.snippetService.addSnippet(snippet).subscribe((snippet) => this.snippets.push(snippet));
  }

}
