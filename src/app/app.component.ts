import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isLiked:boolean = false;
  likesCount:number = 89;
  noOfPost : number=90;

  name:string="TestName";

  likeClicked(likeData){
      console.log(likeData);
  }
}
