import { Component, OnInit } from '@angular/core';
import { PlaylistService } from '../playlist.service'

import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuthModule,AngularFireAuth} from 'angularfire2/auth';
import { Subject } from 'rxjs/Subject';
import {Observable} from 'rxjs/Rx';

import * as firebase from 'firebase/app';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  songs: FirebaseListObservable<any[]>;

  constructor( private plService: PlaylistService) { }

  ngOnInit() {
    
    console.log(this.songs);
  }

}
