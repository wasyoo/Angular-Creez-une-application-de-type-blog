import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {PostsService} from '../services/posts.service';
import {Post} from '../models/post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list-component.html',
  styleUrls: ['./post-list-component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {

  posts: Post[];
  postSubscription: Subscription;
  constructor(private postService: PostsService) {}

  ngOnInit() {
    this.postSubscription = this.postService.postSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      });
    this.postService.getPosts();
    this.postService.emitPost();
  }

  ngOnDestroy() {
    this.postSubscription.unsubscribe();
  }
}
