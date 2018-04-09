import {Component} from '@angular/core';
import * as firebase from 'firebase';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(){
    // Initialize Firebase
    const config = {
      apiKey: 'AIzaSyCmtnrZVE7zrl0bS29X-um-9aAf0N5jssw',
      authDomain: 'blog-d5341.firebaseapp.com',
      databaseURL: 'https://blog-d5341.firebaseio.com',
      projectId: 'blog-d5341',
      storageBucket: 'blog-d5341.appspot.com',
      messagingSenderId: '797299280803'
    };
    firebase.initializeApp(config);

  }
}
