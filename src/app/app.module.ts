import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list-component';
import { PostListItemComponent } from './post-list-item/post-list-item-component';
import {PostsService} from './services/posts.service';
import { NewPostComponent } from './new-post/new-post.component';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

const appRouters: Routes = [
  {path: 'posts', component: PostListComponent},
  {path: 'posts/new' , component: NewPostComponent},
  {path: '', redirectTo : 'posts', pathMatch: 'full' },
  {path: '**', redirectTo: 'posts' }
];

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostListItemComponent,
    NewPostComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRouters)
  ],
  providers: [
    PostsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
