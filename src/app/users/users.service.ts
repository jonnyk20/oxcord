import { Http, Response } from '@angular/http';
import { AuthService  } from '../auth/auth.service';
import { Injectable } from '@angular/core';

@Injectable()
export class UsersService {

constructor(private http: Http,
            private authService: AuthService) {}

        addUser(){
           // return this.http.put('https://ng-recipe-book-41b29.firebaseio.com/users.json','{1: test2}')
        }


    
}