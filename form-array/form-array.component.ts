import { Component } from '@angular/core';
import { FormArray, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css']
})
export class FormArrayComponent{
    form=new FormGroup({
        topics:new FormArray([])
    });
    addTopic(topic: HTMLInputElement){
      this.topics.push(new FormControl(topic.value));
      topic.value='';
    }
    get topics(){
      return this.form.get('topics') as FormArray;
    }
    removeTopic(topic:FormControl){
      let index=this.topics.controls.indexOf(topic);
      this.topics.removeAt(index);

    }
}
