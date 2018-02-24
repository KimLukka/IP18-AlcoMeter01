import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

/*
  Generated class for the FirebaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseProvider {

  constructor(public db: AngularFireDatabase) {
    console.log('Hello FirebaseProvider');
  }

  getList(){
    return this.db.list('/test/');
  }

  addInfo(name){
    this.db.list('/test/').push(name);
  }

  deleteInfo(id){
    this.db.list('/test/').remove(id);
  }

}
