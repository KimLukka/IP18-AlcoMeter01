import { Injectable } from '@angular/core';
import  firebase  from 'firebase';

@Injectable()
export class AuthenticatieProvider {

  constructor() {

  }

  LoginUser(email: string, password: string): Promise<any>{
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }

  CreateNewUser(email: string, password: string, country:String, dateOfBirth:Date): Promise<any> {
    return firebase
    .auth().createUserWithEmailAndPassword(email, password)
    .then( newUser => {
      firebase.database().ref('/userProfile').child(newUser.uid).set({ email: email, country:country, dateOfBirth:dateOfBirth});
    });
  }

  logOut(): Promise<any>{
    return firebase.auth().signOut();
  }

  resetPassword(email: string): Promise<any>{
    return firebase.auth().sendPasswordResetEmail(email);
  }

  getCurrentuserID(){
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log(user.uid);
        return user.uid;
      } else {
        console.log("no user logged in");
        return null;
      }
    });
    }
  }

