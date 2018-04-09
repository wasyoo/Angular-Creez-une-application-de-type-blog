import {Injectable, OnInit} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class PostsService {

  private posts = [
    {
      id: 1,
      title: 'Mon Premier post',
      content: 'Lorem ipsum dolor sit amet, ' +
      'vidisse persequeris cu his. Solum legimus ' +
      'commune sit cu, vis fuisset adolescens elaboraret ' +
      'et. Eos id graecis comprehensam, vix te mediocrem comprehensam.',
      loveIts: -1,
      created_at: new Date()
    },
    {
      id: 2,
      title: 'Mon deuxième post',
      content: 'Lorem ipsum dolor sit amet, ' +
      'vidisse persequeris cu his. Solum legimus commune sit cu, ' +
      'vis fuisset adolescens elaboraret et. Eos id graecis comprehensam, ' +
      'vix te mediocrem comprehensam. Scribentur dissentiunt an has, pro wisi prompta albucius ad.',
      loveIts: 0,
      created_at: new Date()
    },
    {
      id: 3,
      title: 'Encore un post',
      content: 'Lorem ipsum dolor sit amet, ' +
      'vidisse persequeris cu his. Solum legimus commune sit cu, ' +
      'vis fuisset adolescens elaboraret et. Eos id graecis comprehensam, ' +
      'vix te mediocrem comprehensam. Scribentur dissentiunt an has, pro wisi prompta albucius ad.',
      loveIts: 2,
      created_at: new Date()
    }
  ];
  postSubject = new Subject<any[]>();

  emitPost() {
    this.postSubject.next(this.posts.slice());
  }

  constructor() {}

  // l'ajout d'un nouveau post
  addPost(title, content) {
    const PostObject = {
      id: 0,
      title: '',
      content: '',
      loveIts: 0,
      created_at: new Date()
    };
    PostObject.title = title;
    PostObject.content = content;
    PostObject.id = this.posts[(this.posts.length - 1)].id + 1;
    this.posts.push(PostObject);
    this.emitPost();
  }

  // suppression d'un post existant
  deletePost(id: number) {
    this.posts.splice(id, 1)
    this.emitPost();
  }

}
