//import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
//import { Snippet } from '../../interfaces/Snippet';
import { MatDialogRef} from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SnippetService } from 'src/app/services/snippet/snippet.service';


//Import services
import { TopicService } from 'src/app/services/topic/topic.service';
//Import Interfaces
import { Topic } from 'src/app/interfaces/Topic';

@Component({
  selector: 'app-snippet-form',
  templateUrl: './snippet-form.component.html',
  styleUrls: ['./snippet-form.component.css']
})
export class SnippetFormComponent implements OnInit {

  snippetForm !: FormGroup;
  topics: Topic[] = [];

  //@Output() onAddSnippet: EventEmitter<Snippet> = new EventEmitter();

  constructor( 
    private snippetService: SnippetService,
    private dialogRef: MatDialogRef<SnippetFormComponent>,
    private formBuilder: FormBuilder,
    private topicService: TopicService
     ) { }

  ngOnInit(): void {
    this.snippetForm = this.formBuilder.group({
      title : ['', Validators.required],
      description : ['', Validators.required],
      codeSnippet : ['', Validators.required],
      topic : ['', Validators.required],

    })

    this.topicService.getTopicSe().subscribe((topics) => {
      this.topics = topics 
    })  

  }

/*   title?: string;
  description?: string;
  codeSnippet?: string;
  topic?: string; */

  addSnippet(){
    if(this.snippetForm.valid){
      this.snippetService.addSnippetSe(this.snippetForm.value).subscribe(this.snippetForm.value);
    }

    console.log(this.snippetForm.value);


    this.dialogRef.close();

    /* if(!this.title){
      alert('please add a title');
      return
    }

    if(!this.description){
      alert('please add a description');
      return
    }

    if(!this.codeSnippet){
      alert('please add a codeSnipped');
      return
    }

    const newSnippet = {
      title: this.title,
      description: this.description,
      codeSnippet: this.codeSnippet,
      topic: this.topic
    }

    this.onAddSnippet.emit(newSnippet);

    this.title = ''
    this.description = ''
    this.codeSnippet = ''
    this.topic = ''

    console.log(newSnippet) */
  } 

   //Close Modal
   onNoClick(): void {
    this.dialogRef.close();
  }

}
