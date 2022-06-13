import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {TopicComponent} from '../topic/topic.component'

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

  openDialogTopic(): void {
   this.dialog.open(TopicComponent, {
  
    });
  }

}
