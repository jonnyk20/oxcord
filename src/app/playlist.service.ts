
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Song } from './song.model';

import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuthModule,AngularFireAuth} from 'angularfire2/auth';
import { Subject } from 'rxjs/Subject';
import {Observable} from 'rxjs/Rx';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

import * as firebase from 'firebase/app';

@Injectable()
export class PlaylistService {

user: Observable<firebase.User>;
  songs: FirebaseListObservable<any[]>;
  sizeSubject: Subject<any>;
  nowPlaying: FirebaseListObservable<Song>;
  np: any;
  npKey: any = null;


  constructor(private db: AngularFireDatabase, 
              public afAuth: AngularFireAuth,
              private http: Http) {};


 getSongs(){

    this.songs = this.db.list('/songs', {
      query: {
        orderByChild: 'likes',  
      }
  }
    ).map((array) => array.reverse())  as FirebaseListObservable<Song[]>;


  return this.songs;
 }
  
  getNowPlaying(){

 this.nowPlaying = this.db.list('/songs', {
      query: {
        orderByChild: 'play',
        equalTo: 1
      }
  })  as FirebaseListObservable<Song>      

    return this.nowPlaying;
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


play(nextSongKey, currentSongKey){

console.log("Play!")
  this.db.list('/songs/').update(nextSongKey,{ play: 1 });
  this.db.list('/songs/').update(currentSongKey,{ play: 0 });
  return nextSongKey;
}

stop(id){
  this.songs.update(id,{ play: 0 });
}


addSong(){
//this.db.list('/songs/').push({artist: "TestArtist", likes: 3, play: 0, title: "TestTitle"});

}
deleteSong(id: string){
 this.db.list('/songs').remove(id);
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
/*
  interface Song{
    $key?: number;
    title?: string;
    artist?: string;
    likes?: number;
    play?: number;
    np?: boolean;
  }
  */