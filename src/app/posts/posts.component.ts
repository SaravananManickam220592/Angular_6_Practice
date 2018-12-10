import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent{

  posts:any[]=[];

  constructor(http:Http) {
    http.get('https://jsonplaceholder.typicode.com/todos').subscribe((res)=>{
         console.log(res);
          this.posts=res.json();
    },(error)=>{
          console.log("Error in Caling Backend");
          console.log(error);
    },()=>{
      console.log("Completed");
    });
   }
}
