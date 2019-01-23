import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { usernameValidators } from '../signup/username.validators';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent {
  form;
  constructor(fb:FormBuilder){
    this.form=fb.group({
      name:['',[Validators.required,usernameValidators.cannotContainSpace]],
      contact:fb.group({
        email:['',[Validators.required,Validators.email]],
        phno:['',Validators.required]

      })
    })
  }
  get name(){
    return this.form.get('name');
  }
  get phno(){
    return this.form.get('contact.phno');
  }
  get email(){
    return this.form.get('contact.email');
  }

}
