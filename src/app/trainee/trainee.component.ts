import { ValidationErrors } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trainee',
  templateUrl: './trainee.component.html',
  styleUrls: ['./trainee.component.css']
})
export class TraineeComponent implements OnInit {

    traineeForm = new FormGroup({
        email : new FormControl('',[Validators.required,Validators.email,Validators.minLength(20)]),
        name : new FormControl('',[Validators.required])
    });


  constructor() { }

  ngOnInit() {
  }

  get email(){
   return  this.traineeForm.get('email');
  }

}
