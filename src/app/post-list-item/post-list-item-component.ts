import { Component, Input, OnInit } from '@angular/core';
import {PostsService} from '../services/posts.service';
import {Post} from '../models/post.model';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item-component.html',
  styleUrls: ['./post-list-item-component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContenu: string;
  @Input() postCreatedAt: number;
  @Input() postLoveIts: number;
  @Input() index: number;

  constructor(private postService: PostsService) { }

  ngOnInit() {
  }

  onlove() {
    this.postService.love(this.index);
    this.postService.emitPost();
  }

  ondontlove() {
    this.postService.dontlove(this.index);
    this.postService.emitPost();
  }

  onDeletePost() {
    this.postService.deletePost(this.index);
  }
}
