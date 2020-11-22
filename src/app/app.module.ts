import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import 'firebase/database';
var firebase_config = {
  apiKey: "AIzaSyB3jqz2o2yG46zb4ag9SFqce7d1iPcRTH0",
  authDomain: "foxiton-documentation.firebaseapp.com",
  databaseURL: "https://foxiton-documentation.firebaseio.com",
  projectId: "foxiton-documentation",
  storageBucket: "foxiton-documentation.appspot.com",
  messagingSenderId: "865457874066",
  appId: "1:865457874066:web:239bf078353bea024f724b",
  measurementId: "G-3HLDH81WBC",
};
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebase_config),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

