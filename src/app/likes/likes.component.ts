import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent implements OnInit {

  @Input('isLiked') isPostLiked:boolean;
  @Input('likesCount') likesCount:number;

  @Output('likeOutput') likeOutput=new EventEmitter();

  constructor() { }

  likeClicked(){
    this.isPostLiked = !this.isPostLiked;
    if(this.isPostLiked){
      ++this.likesCount;
    }
    else{
      --this.likesCount;
    }

    this.likeOutput.emit({ isLiked : this.isPostLiked , likesCount : this.likesCount});
  }

  ngOnInit() {
  }

}
