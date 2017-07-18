import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuthModule,AngularFireAuth} from 'angularfire2/auth';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Subject } from 'rxjs/Subject';
import {Observable} from 'rxjs/Rx';

import * as firebase from 'firebase/app';
import { PlaylistService } from '../playlist.service'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

user: Observable<firebase.User>;
songs: any;
CurrentSongKey: any;
term: string = '';
permission: string = 'admin';


  constructor(private plService: PlaylistService,
              public afAuth: AngularFireAuth) { 
                this.user = afAuth.authState;
              }

  ngOnInit() {
      this.plService.getSongs() .subscribe (songs => { 
     this.songs = songs;
        });   

        this.plService.getNowPlaying()
     .subscribe (nowPlaying => { 
     this.CurrentSongKey = nowPlaying[0]['$key'];
        });

  }


addLike(id: string, likes: number): void {
  this.plService.addLike(id, likes);
}

removeLike(id: string, likes: number): void {
 this.plService.removeLike(id, likes);
}

play(id) {
  this.CurrentSongKey = 
  this.plService.play(id, this.CurrentSongKey);
 
}
stop(id){
  this.plService.stop(id);
}

addSong(){
 
 this.plService.addSong();
}

deleteSong(id: string){
 this.plService.deleteSong(id);
}

fblogin() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
  }

 
  logout() {
    this.afAuth.auth.signOut();
  }

  


}
