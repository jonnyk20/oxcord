import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuthModule,AngularFireAuth} from 'angularfire2/auth';
import {Observable} from 'rxjs/Rx';


@Injectable()
export class AuthService {
    user: Observable<firebase.User>;
    currentUser: any;
    users: Observable<any>;
    token: string;
    authStatus: boolean;
    userStorage: any;

    constructor(private router: Router,
                public afAuth: AngularFireAuth,
                private db: AngularFireDatabase) {
                    this.user = afAuth.authState as Observable<firebase.User>;
                    this.users = this.db.list('/users') as FirebaseListObservable<any>;
                }



    signInFB() {
       this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
       .then(
           response => {
               //console.log(this.afAuth.auth.currentUser.getIdToken())
              // console.log(this.afAuth.authState)
              //return this.checkUser(response.user.uid);
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

    checkUser(uid){
       
         this.currentUser = this.db.list('/users', {
      query: {
        orderByChild: 'userId',
        equalTo: uid
      }
  })  as FirebaseListObservable<any>      

    return this.currentUser;
    

    }


   getUser(){
       return this.user
   }

    addUser(uid){
        this.db.list('/users/').push({userId: uid, userName: "User1", availableLikes: 10});
        
    }

}