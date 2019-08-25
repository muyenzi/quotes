import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent implements OnInit {
  like=0;
  dislike=0;
  likes(){
    this.like=this.like+1;
  }
  dislikes(){
    this.dislike=this.dislike+1;
  }
  constructor() { }

  ngOnInit() {
  }

}
