import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor() { }

  todo:string="";

  todos:string[]=[];
  name:string="saravanan manickam";
  price :number =345;

  today: number = Date.now();
  ngOnInit() {
  }

  enterTodo(event){
      if(event.keyCode==13){
          var value=event.target.value;
          this.todos.push(value);
          event.target.value="";
          console.log(this.todos);
      }
  }

  saveTodo(){
    var value=this.todo;
    this.todos.push(value);
    this.todo="";
    console.log(this.todos);
  }

}
