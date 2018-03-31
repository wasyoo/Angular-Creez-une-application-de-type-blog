import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  Posts = [
    {
      title: 'Mon Premier post',
      content: 'Lorem ipsum dolor sit amet, ' +
      'vidisse persequeris cu his. Solum legimus ' +
      'commune sit cu, vis fuisset adolescens elaboraret ' +
      'et. Eos id graecis comprehensam, vix te mediocrem comprehensam.',
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: 'Mon deuxième post',
      content: 'Lorem ipsum dolor sit amet, ' +
      'vidisse persequeris cu his. Solum legimus commune sit cu, ' +
      'vis fuisset adolescens elaboraret et. Eos id graecis comprehensam, ' +
      'vix te mediocrem comprehensam. Scribentur dissentiunt an has, pro wisi prompta albucius ad.',
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: 'Encore un post',
      content: 'Lorem ipsum dolor sit amet, ' +
      'vidisse persequeris cu his. Solum legimus commune sit cu, ' +
      'vis fuisset adolescens elaboraret et. Eos id graecis comprehensam, ' +
      'vix te mediocrem comprehensam. Scribentur dissentiunt an has, pro wisi prompta albucius ad.',
      loveIts: 0,
      created_at: new Date()
    }
  ];

}
