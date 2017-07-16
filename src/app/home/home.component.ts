import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuthModule,AngularFireAuth} from 'angularfire2/auth';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Subject } from 'rxjs/Subject';
import {Observable} from 'rxjs/Rx';

import * as firebase from 'firebase/app';
import { PlaylistService } from '../playlist.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

user: Observable<firebase.User>;
  songs: any;
  sizeSubject: Subject<any>;
   

  constructor(private plService: PlaylistService, public afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
   
  }

  ngOnInit() {
    this.plService.getSongs() .subscribe (songs => { 
     this.songs = songs;
        });   
  }

  noLike(){
console.log("Not Logged in");
}

addLike(id: string, likes: number): void {
  this.plService.addLike(id, likes);
}

removeLike(id: string, likes: number): void {
 this.plService.removeLike(id, likes);
}



fblogin() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
  }


  glogin() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }
  


}
