import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuthModule,AngularFireAuth} from 'angularfire2/auth';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Subject } from 'rxjs/Subject';
import {Observable} from 'rxjs/Rx';

import * as firebase from 'firebase/app';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

user: Observable<firebase.User>;
  songs: FirebaseListObservable<any[]>;
  sizeSubject: Subject<any>;
   

  constructor(private db: AngularFireDatabase, public afAuth: AngularFireAuth) {
    this.songs = db.list('/songs');
    this.user = afAuth.authState;
   
   
  }

  ngOnInit() {
  }

  noLike(){
console.log("Not Logged in");
}

addLike(id: string, likes: number): void {

 this.db.list('/songs/').update(id,{ likes: likes +1 })
}
removeLike(id: string, likes: number): void {

 this.db.list('/songs/').update(id,{ likes: likes -1 });
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
  
testAction(){
var result = document.getElementById('testitem');
console.log(result);
}

}
