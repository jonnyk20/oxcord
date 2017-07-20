import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuthModule,AngularFireAuth} from 'angularfire2/auth';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Subject } from 'rxjs/Subject';
import {Observable} from 'rxjs/Rx';

import * as firebase from 'firebase/app';
import { PlaylistService } from '../playlist.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

user: Observable<firebase.User>;
userList: any;
songs: any;
CurrentSongKey: any;
term: string = '';
permission: string = 'admin';
fillLikes: number = 3;
newTitle: string;
newArtist: string;
newLikes: number;


  constructor(private plService: PlaylistService,
              public afAuth: AngularFireAuth,
              public authService: AuthService) { 
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

     this.authService.getUsers().subscribe(
       users => {
          this.userList = users;
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
 
 this.plService.addSong(this.newTitle, this.newArtist, this.newLikes);
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

  setLikes(key, availableLikes){
    //console.log(this.fillLikes)
    this.authService.fillLikes(key, availableLikes, this.fillLikes);
  }


}
