import { Component, OnInit } from '@angular/core';
import { PlaylistService } from '../playlist.service'

import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuthModule,AngularFireAuth} from 'angularfire2/auth';
import { Subject } from 'rxjs/Subject';
import {Observable} from 'rxjs/Rx';
import { AuthService } from '../auth/auth.service';
// import { UsersService } from '../users/users.service';
import * as firebase from 'firebase/app';
import { SongComponent } from '../song/song.component';

import { trigger, state, style, transition, animate, keyframes, group } from '@angular/animations';
import { NgClass } from '@angular/common';
import {Http, Response } from '@angular/http';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  songs: any;
  nowPlaying: any;
  authStatus: boolean;
  state = 'normal';
  permission: string = 'admin';
  classToggle: string = 'standard';
  counter = 0;
  initiated: boolean = false;
  list:any;

  constructor( private plService: PlaylistService,
               private authService: AuthService,
              //  private usersService: UsersService
              private http: Http
               ) { }

  ngOnInit() {
   this.plService.getSongs() .subscribe (songs => { 
     this.songs = songs;
        });   
    
    this.authStatus = this.authService.isAuthenticated();
    setTimeout(() =>{  this.initiated = true; }, 10000);
  }

newData(){
    return this.http.put('https://oxcord-f9409.firebaseio.com/testdb.json', {name1: 'value1'})
    .subscribe(
      (response: Response) => {
        console.log(response);
      }
    );
  }

  updateData(){
    return this.http.patch('https://oxcord-f9409.firebaseio.com/testdb.json', {name1: 'value2'})
    .subscribe(
      (response: Response) => {
        console.log(response);
      }
    );
  }

  getData(){
    return this.http.get('https://oxcord-f9409.firebaseio.com/testdb.json')
    .subscribe(
      (response: Response) => {
        this.list = response.json();
        console.log(this.list);
      }
    );
  }










}
