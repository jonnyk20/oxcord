import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Subject } from 'rxjs/Subject';
import {Observable} from 'rxjs/Rx';
import { Song } from '../song.model';


import * as firebase from 'firebase/app';
import { PlaylistService } from '../playlist.service'
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, DoCheck{
 nowPlaying: any;
 testVar: string = "Hey!";
 user:any;   
 userChecked: boolean = false;

  sizeSubject: Subject<any>;
   
   constructor(
   private plService: PlaylistService,
   private authService: AuthService) {
   
  }

   ngOnInit() {
     this.plService.getNowPlaying()
     .subscribe (nowPlaying => { 
     this.nowPlaying = nowPlaying[0];
        });

     this.authService.getUser().subscribe (user => { 
     this.user = user;

        });
    }

    ngDoCheck() {
      if (this.userChecked == false && this.user) {
      this.checkUser();
      this.userChecked = true;
      }
    }

noLike(){
console.log("Not Logged in");
}
  
checkUser(){
  // if (this.user){
  // console.log(this.user);}
  // else {console.log("Not logged in");}
  if (!this.user){console.log("Not Signed in!")} else {

    this.authService.checkUser(this.user.uid).subscribe(
        data => { 
            if (data.length == 0)
            {console.log("New User!")} else {
            console.log("Welcome "+data[0].userName+"!");}
              }
    )
  }
}

fblogin() {
  return this.authService.signInFB();
 
}

  logout() {
    this.authService.logout();
  }




}
