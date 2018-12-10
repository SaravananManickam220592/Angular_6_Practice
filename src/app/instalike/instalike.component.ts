import { Component, OnInit, Input , Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-instalike',
  templateUrl: './instalike.component.html',
  styleUrls: ['./instalike.component.css']
})
export class InstalikeComponent implements OnInit {

  @Input('isLiked') isLiked:boolean;
  @Input('likesCount') likesCount:number;

  @Output('likesClicked') likesOutput = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  likeClicked(){
    this.isLiked=!this.isLiked;
    if(this.isLiked)
      this.likesCount++;
    else
    this.likesCount--;

    this.likesOutput.emit({ isLiked : this.isLiked , likesCount : this.likesCount });
  }

}
