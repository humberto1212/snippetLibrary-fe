import { Component, OnInit} from '@angular/core';
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

  addSnippet(){
    if(this.snippetForm.valid){
      this.snippetService.addSnippetSe(this.snippetForm.value).subscribe(this.snippetForm.value);
    }

    console.log(this.snippetForm.value.codeSnippet);


    this.dialogRef.close();
  } 

   //Close Modal
   onNoClick(): void {
    this.dialogRef.close();
  }

}
