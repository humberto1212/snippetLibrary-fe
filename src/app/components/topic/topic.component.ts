import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Topic } from 'src/app/interfaces/Topic';
import { MatDialogRef} from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TopicService } from 'src/app/services/topic/topic.service';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {
  //topic?: string;
  productForm !: FormGroup;

  @Output() onAddTopic: EventEmitter<Topic> = new EventEmitter();

  
  constructor( 
    private topicService: TopicService,
    private dialogRef: MatDialogRef<TopicComponent>,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      topic : ['', Validators.required]
    })

  }

  //Add New TOPIC
  addTopic(){
    console.log(this.productForm.value);
    if(this.productForm.valid){
      this.topicService.addTopicSe(this.productForm.value).subscribe((topic) => this.productForm.value);
    }

  /*   if(!this.topic){
      alert('please add a topic')
    }

    const newTopic = {
      topic: this.topic
    }

    this.onAddTopic.emit(newTopic);

    this.topic = ''; */
  }

  //Close Modal
  onNoClick(): void {
    this.dialogRef.close();
  }

}
