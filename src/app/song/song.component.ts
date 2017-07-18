import { Component, OnInit, Input, DoCheck, AfterViewInit } from '@angular/core';
import { PlaylistService } from '../playlist.service'

import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuthModule,AngularFireAuth} from 'angularfire2/auth';
import { Subject } from 'rxjs/Subject';
import {Observable} from 'rxjs/Rx';
import { AuthService } from '../auth/auth.service';
// import { UsersService } from '../users/users.service';
import * as firebase from 'firebase/app';


import { trigger, state, style, transition, animate, keyframes, group } from '@angular/animations';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css'],
  animations: [trigger('divState', [
			state('normal', style({
				'background-color': 'transparent'
			})),
			state('liked', style({
				'background-color': 'transparent'
			})),
			transition('normal <=> liked', animate(1000,  keyframes([
        style({
          'background-color': 'transparent'
        }),
         style({
          'background-color': 'lightgreen'
        }),
         style({
          'background-color': 'lightgreen'
        }),
         style({
          'background-color': 'transparent'
        }),
      ]))),
		])
    
  ]
})


@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit, DoCheck, AfterViewInit {
  @Input() song: any;
  @Input() permission: any;
  state = 'normal';
  user: Observable<firebase.User>;
  availableLikes:number;
  animation: number = 0;
  CurrentSongKey: any;
  color: string = 'lightcyan'

   constructor( private plService: PlaylistService,
               public afAuth: AngularFireAuth,
             
               ) { 

                 this.user = afAuth.authState;
               }

  ngOnInit() {
      this.plService.getNowPlaying()
     .subscribe (nowPlaying => { 
     this.CurrentSongKey = nowPlaying[0]['$key'];
        });
       
  }
  ngAfterViewInit(){
  }

  ngDoCheck() {
    this.availableLikes = this.plService.availebleLikes;
    }
  onAnimate(){

    this.state == 'normal' ? this.state = 'liked' : this.state = 'normal';
  }
 animationStarted(event){
 }

  addLike(id: string, likes: number): void {
  if(this.availableLikes <= 0 ) {
    console.log("No Mmore likes!");
  } else {
  this.plService.addLike(id, likes);
}

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

 noLike(){
console.log("Not Logged in");
}





}
