import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuthModule,AngularFireAuth} from 'angularfire2/auth';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})


export class AppComponent {
    title = 'Oxcord';
/*
    items: FirebaseListObservable<any[]>;
  constructor(db: AngularFireDatabase) {
    this.items = db.list('/items');
  }
  */

  testobject: FirebaseObjectObservable<any>;
   constructor(db: AngularFireDatabase) {
    this.testobject = db.object('/testobject');
  }

save(newName: string) {
    this.testobject.update({ name: newName });
  }




  songs = [
  
  {title: "Song", artist: "Artist", likes: 1},
  {title: "Chanson", artist: "Artiste", likes: 3},
  {title: "ABC", artist: "OneTwoThree", likes: 2},
  {title: "Trash", artist: "Meek Mill", likes: 0}
  
  ];
  addLike(input){
  this.songs[input].likes +=1;
} 
removeLike(input){
  this.songs[input].likes -=1;
} 
args="Me";







}

