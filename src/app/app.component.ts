//COMPONENT TS

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


  songs: FirebaseObjectObservable<any>;
   constructor(db: AngularFireDatabase) {
    this.songs = db.object('/songs');
  }
  
  addLike(index){
console.log("worls")

} 



}

