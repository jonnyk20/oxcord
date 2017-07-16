import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuthModule,AngularFireAuth} from 'angularfire2/auth';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class AuthService {
    user: Observable<firebase.User>;
    users: Observable<any>;
    token: string;
    authStatus: boolean;

    constructor(private router: Router,
                public afAuth: AngularFireAuth,
                private db: AngularFireDatabase) {
                    this.user = afAuth.authState as Observable<firebase.User>;
                    this.users = this.db.list('/users') as FirebaseListObservable<any>;
                }



    signInFB() {
       this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
       .then(
           reponse => {
               //console.log(this.afAuth.auth.currentUser.getIdToken())
              // console.log(this.afAuth.authState)
           }
       )
            // .then(
            //     response => {
            //         //this.router.navigate(['/admin']);
            //         firebase.auth().currentUser.getToken()
            //            .then(
            //                (token: string) => {this.token = token;console.log(this.token)}
            //            ) 
            //     }
            // )
            
            
            .catch(
                error => console.log(error)
            );
    }

    logout(){
        this.afAuth.auth.signOut();
        this.user = null;
    }

    getToken(){
        firebase.auth().currentUser.getToken()
          .then( 
              (token: string) => this.token = token
             );
        return this.token;
    }

    isAuthenticated() {
        return this.authStatus;
        
         
    }

   getUser(){
       return this.user
   }

    addUser(){
        this.db.list('/users').push({username: "Testing", likes: 3});

    }

}