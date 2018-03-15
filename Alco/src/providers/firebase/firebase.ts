import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class FirebaseProvider {

  constructor(public afd: AngularFireDatabase) {}
  getUser() {
    return this.afd.list('/userProfile/');
  }
 
  addUser(email) {
    this.afd.list('/userProfile/').push(email);
  }
 
  removeUser(email) {
    this.afd.list('/userProfile/').remove(email);


  }

}
