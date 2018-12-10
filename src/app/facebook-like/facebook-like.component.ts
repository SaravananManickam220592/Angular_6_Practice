import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-facebook-like',
  templateUrl: './facebook-like.component.html',
  styleUrls: ['./facebook-like.component.css']
})
export class FacebookLikeComponent {

  @Input('isLiked') isLiked:boolean;
  @Input('likesCount') likesCount:number;
  @Output('likeOutput') likeOutputEmitter = new EventEmitter();

  constructor() { }

  likeClicked(){
    this.isLiked=!this.isLiked;
    if(this.isLiked){
      ++this.likesCount;
    }else{
      --this.likesCount;
    }

    this.likeOutputEmitter.emit({ isLiked : this.isLiked ,likesCount : this.likesCount });
  }

}
