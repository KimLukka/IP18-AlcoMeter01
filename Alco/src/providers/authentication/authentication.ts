import { Injectable } from '@angular/core';
import firebase from 'firebase';


@Injectable()
export class AuthenticationProvider {

  constructor() {
    console.log('Hello AuthenticationProvider Provider');
  }

  loginUser(email: string, password: string): Promise<any>{
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }

}
