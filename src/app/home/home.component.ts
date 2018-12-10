import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users:any[]=[{ name : 'Saravanan' , age : 27 , city : 'chennai' , country : 'india'},
  { name : 'Bhanu' , age : 28 , city : 'Hyderabad' , country : 'india'},
  { name : 'Ravi' , age : 25 , city : 'Bangalore' , country : 'india'},
  { name : 'Geetha' , age : 29 , city : 'Pune' , country : 'india'},
  { name : 'Rahul' , age : 30 , city : 'Kochi' , country : 'india'}
]

  constructor() { }

  ngOnInit() {
  }

}
