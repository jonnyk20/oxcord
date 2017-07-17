import { Component, OnInit } from '@angular/core';
import { PlaylistService } from '../playlist.service'

import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuthModule,AngularFireAuth} from 'angularfire2/auth';
import { Subject } from 'rxjs/Subject';
import {Observable} from 'rxjs/Rx';
import { AuthService } from '../auth/auth.service';
// import { UsersService } from '../users/users.service';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  songs: any;
  nowPlaying: any;
  authStatus: boolean;

  constructor( private plService: PlaylistService,
               private authService: AuthService,
              //  private usersService: UsersService
               ) { }

  ngOnInit() {
   this.plService.getSongs() .subscribe (songs => { 
     this.songs = songs;
        });   
    
    this.authStatus = this.authService.isAuthenticated();

  }

//   onAddUser(){
// this.authService.addUser();
//   }


}
