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

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  animations: [trigger('divState', [
			state('normal', style({
				'background-color': 'transparent'
			})),
			state('highlighted', style({
				'background-color': 'transparent'
			})),
			transition('normal <=> highlighted', animate(1000,  keyframes([
        
        style({
          'background-color': 'transparent'
        }),
         style({
          'background-color': 'blue'
        }),
         style({
          'background-color': 'blue'
        }),
         style({
          'background-color': 'transparent'
        }),
      ])

        )
      
      )
		])
    
  ]
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

  constructor( private plService: PlaylistService,
               private authService: AuthService,
              //  private usersService: UsersService
               ) { }

  ngOnInit() {
   this.plService.getSongs() .subscribe (songs => { 
     this.songs = songs;
        });   
    
    this.authStatus = this.authService.isAuthenticated();
    setTimeout(() =>{  this.initiated = true; }, 10000);
  }

highlight(){
	  this.state == 'normal' ? this.state = 'highlighted' : this.state = 'normal';

	}

  normalize(){
	  this.state = 'normal';
	}
  onAnimate(){
    //this.highlight();
    //this.state = 'highlighted';
    this.state == 'normal' ? this.state = 'highlighted' : this.state = 'normal';
  }

  onRevert(){
    this.state = 'normal';
   
  }
  animationEnded(event){
    
    console.log("done!");
   
  }
  
  switch(){
    if (this.counter == 0) {this.classToggle = 'animatetest'; this.counter++} else{

    this.classToggle == 'animatetest'? this.classToggle = 'animatetest2' : this.classToggle = 'animatetest';
    }
  }


}
