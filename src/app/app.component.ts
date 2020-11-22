import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database'
import firebase from "firebase/app";
import { environment } from "./../environments/environment";
import "firebase/database";
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'first angular project'; 
  abc = firebase.initializeApp(environment.firebase_config);
  database = firebase.database(); 
  read(){
    //firebase.database().ref('users/' + '1').set({
    //  username: 'ashwin',
    //  email: 'abc',
    //  profile_picture : 'abcc'
    //});
    return ['abc','def','ghi@gmail.com']
}
}