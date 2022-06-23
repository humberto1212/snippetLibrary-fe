import { Component, Input, OnInit } from '@angular/core';
import { Snippet } from 'src/app/interfaces/Snippet';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {

  @Input() snippets?: Snippet[];

  constructor() { }

  ngOnInit(): void {
  }

}
