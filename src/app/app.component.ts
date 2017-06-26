import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Oxcord';
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
