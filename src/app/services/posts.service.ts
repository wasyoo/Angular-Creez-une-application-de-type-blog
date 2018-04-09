import {Injectable, OnInit} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Post} from '../models/post.model';
import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;

@Injectable()
export class PostsService {

  private posts: Post[] = [];
  postSubject = new Subject<any[]>();

  emitPost() {
    this.postSubject.next(this.posts);
  }

  constructor() {}

  savePosts() {
    firebase.database().ref('/posts').set(this.posts);
  }

  // récupérer la liste des posts
  getPosts() {
    firebase.database().ref('/posts')
      .on('value', (data: DataSnapshot) => {
          this.posts = data.val() ? data.val() : [];
          this.emitPost();
        }
      );
  }

  // l'ajout d'un nouveau post
  addPost(newpost: Post) {
    this.posts.push(newpost);
    this.savePosts();
    this.emitPost();
  }

  // suppression d'un post existant
  deletePost(id: number) {
    this.posts.splice(id, 1);
    this.savePosts();
    this.emitPost();
  }

  love(id: number) {
    this.posts[id].loveIts += 1;
    this.savePosts();
    this.emitPost();
  }

  dontlove(id) {
    this.posts[id].loveIts -= 1;
    this.savePosts();
    this.emitPost();
  }

}
