import { Component, OnInit, EventEmitter, Output } from '@angular/core';
//import { Topic } from 'src/app/interfaces/Topic';
import { MatDialogRef} from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

//Import services
import { TopicService } from 'src/app/services/topic/topic.service';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {

  topicForm !: FormGroup;
  
  constructor( 
    private topicService: TopicService,
    private dialogRef: MatDialogRef<TopicComponent>,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit(): void {
    this.topicForm = this.formBuilder.group({
      topic : ['', Validators.required]
    })

  }

  //Add New TOPIC
  addTopic(){
    console.log(this.topicForm.value);
    if(this.topicForm.valid){
      this.topicService.addTopicSe(this.topicForm.value).subscribe(this.topicForm.value);
    }

    this.dialogRef.close();
  }

  //Close Modal
  onNoClick(): void {
    this.dialogRef.close();
  }

}
