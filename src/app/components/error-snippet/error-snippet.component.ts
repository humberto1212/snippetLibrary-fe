import { Component, OnInit } from '@angular/core';
import { MatDialogRef} from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

//Import services
import { TopicService } from 'src/app/services/topic/topic.service';
import { ErrorSnippetService } from 'src/app/services/errorSnippet/error-snippet.service';
//Import Interfaces
import { Topic } from 'src/app/interfaces/Topic';

@Component({
  selector: 'app-error-snippet',
  templateUrl: './error-snippet.component.html',
  styleUrls: ['./error-snippet.component.css']
})
export class ErrorSnippetComponent implements OnInit {

  errorSnippetForm !: FormGroup;
  topics: Topic[] = [];

  constructor(
    private errorSnippetService: ErrorSnippetService,
    private dialogRef: MatDialogRef<ErrorSnippetComponent>,
    private formBuilder: FormBuilder,
    private topicService: TopicService
  ) {}

  ngOnInit(): void {

    this.errorSnippetForm = this.formBuilder.group({
      title : ['', Validators.required],
      description : ['', Validators.required],
      codeSnippet : ['', Validators.required],
      topic : ['', Validators.required],
    })

    this.topicService.getTopicSe().subscribe((topics) => {
      this.topics = topics 
    })  

  }

  addErrorSnippet(){
    if(this.errorSnippetForm.valid){
      this.errorSnippetService.addErrorSnippetSe(this.errorSnippetForm.value).subscribe(this.errorSnippetForm.value);
    }

    console.log(this.errorSnippetForm.value);


    this.dialogRef.close();
  }

     //Close Modal
     onNoClick(): void {
      this.dialogRef.close();
    }

}
