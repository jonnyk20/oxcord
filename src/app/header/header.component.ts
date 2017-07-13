import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuthModule,AngularFireAuth} from 'angularfire2/auth';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Subject } from 'rxjs/Subject';
import {Observable} from 'rxjs/Rx';
import { Song } from '../song.model';


import * as firebase from 'firebase/app';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    
   
user: Observable<firebase.User>;

  sizeSubject: Subject<any>;
   
   constructor( public afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
  }

   ngOnInit() {
    }

  
noLike(){
console.log("Not Logged in");
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
