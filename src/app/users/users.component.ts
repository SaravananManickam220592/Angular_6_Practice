import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

   userName:string = "";
   age:number;
   user:any;

   users:any[]=[{ name : 'Saravanan' , age : 27 , city : 'chennai' , country : 'india'},
   { name : 'Bhanu' , age : 28 , city : 'Hyderabad' , country : 'india'},
   { name : 'Ravi' , age : 25 , city : 'Bangalore' , country : 'india'},
   { name : 'Geetha' , age : 29 , city : 'Pune' , country : 'india'},
   { name : 'Rahul' , age : 30 , city : 'Kochi' , country : 'india'}
 ]

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params)=>{
          this.userName=params.get('name');
          this.age=Number.parseInt(params.get('age'));
    })

    for(let i=0;i<this.users.length;i++){
        if(this.users[i].name==this.userName && this.users[i].age==this.age){
          this.user=this.users[i];
        }
    }
  }

}
