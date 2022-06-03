import { Component, OnInit } from '@angular/core';
import { Snippet } from '../../interfaces/Snippet';

@Component({
  selector: 'app-snippet-form',
  templateUrl: './snippet-form.component.html',
  styleUrls: ['./snippet-form.component.css']
})
export class SnippetFormComponent implements OnInit {

  addSnippet(val: Snippet){
    console.log(val)
  } 

  constructor() { }

  ngOnInit(): void {
  }

}
