import { Component, OnInit, Input } from '@angular/core';
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
			state('highlighted', style({
				'background-color': 'transparent'
			})),
			transition('normal <=> highlighted', animate(1000,  keyframes([
        
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


      ])

        )
      
      )
		])
    
  ]
})


@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit {
  @Input() song: any
  state = 'normal';
  constructor() { }

  ngOnInit() {
  }
  onAnimate(){
    //this.highlight();
    //this.state = 'highlighted';
    this.state == 'normal' ? this.state = 'highlighted' : this.state = 'normal';
  }

}
