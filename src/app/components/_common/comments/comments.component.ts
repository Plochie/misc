import { Comment } from './../../../entities/comment';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  comments: Comment[] = [];

  constructor() {
    // dummy data

    const comment1 = new Object() as Comment;
    comment1.data = 'this is comment 1';
    comment1.createdBy = 'STAAAA0000';

    const comment2 = new Object() as Comment;
    comment2.data = 'this is comment 2';
    comment2.createdBy = 'CLAAAA0000';

    this.comments.push(comment1);
    this.comments.push(comment2);
  }

  ngOnInit() {
  }

}
