import { UsernameValidators } from './username.validators';
import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  form= new FormGroup({
    address : new FormGroup({
        streetName: new FormControl('',Validators.required)
    }),
    email : new FormControl('',[
      Validators.required,
      Validators.minLength(5),
      Validators.email
    ]
    ) ,
    name : new FormControl('',[
      Validators.required,
      UsernameValidators.cannotContainSpace
    ],
    [
      UsernameValidators.shouldBeUnique
    ]
    )
  });

  constructor(fb:FormBuilder) { 
      this.form=fb.group({
          address : fb.group({
              streetName : ['',[],[]]
          }),
          email : ['',[Validators.required]],
          name : ['',[Validators.required]]
      })
  }

  signUp(){
    var formValue=this.form.value;
    console.log(formValue);
  }

  get email(){
    return this.form.get('email');
  }

  get streetName(){
    return this.form.get('address.streetName');
  }

  get name(){
    return this.form.get('name');
  }

  

  ngOnInit() {
  }

}
