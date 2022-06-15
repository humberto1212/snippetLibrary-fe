import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {TopicComponent} from '../topic/topic.component'
import { SnippetFormComponent } from '../snippet-form/snippet-form.component';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  constructor(
    private dialog : MatDialog
    ) { }

  ngOnInit(): void {
  }

  //TOPIC FORM
  openDialogTopic(): void {
   this.dialog.open(TopicComponent, {
    });
  }

  //SNIPPET FORM
  openDialogSnippet(): void {
    this.dialog.open(SnippetFormComponent, {
     });
   }

}
