import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContenu: string;
  @Input() postCreatedAt: number;
  @Input() postLoveIts;


  constructor() { }

  ngOnInit() {
  }

  love() {
    this.postLoveIts += 1;
  }
  dontlove() {
    this.postLoveIts -= 1;
  }
}
