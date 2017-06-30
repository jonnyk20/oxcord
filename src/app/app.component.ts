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


  songs: FirebaseListObservable<any[]>;
   constructor(private db: AngularFireDatabase) {
    this.songs = db.list('/songs');
   
  }
  
addLike(id: string, likes: number): void {

 this.db.list('/songs/').update(id,{ likes: likes +1 });
}
removeLike(id: string, likes: number): void {

 this.db.list('/songs/').update(id,{ likes: likes -1 });
}



}

