import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SortByPipe } from './sort-by.pipe';
import { FilterPipe } from './filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Pipe, PipeTransform } from '@angular/core'; 

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuthModule} from 'angularfire2/auth';
import { environment } from '../environments/environment';

import { AngularFireAuth } from 'angularfire2/auth';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AdminComponent } from './admin/admin.component';

import { AppRoutingModule } from './app-routing.module';
import { TestComponent } from './test/test.component';

import { PlaylistService } from './playlist.service';

@NgModule({
  declarations: [
    AppComponent,
    SortByPipe,
   FilterPipe,
   HomeComponent,
   HeaderComponent,
   AdminComponent,
   TestComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'my-app'),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AppRoutingModule
    

  ],
  providers: [PlaylistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
