import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {FirebaseProvider } from './../../providers/firebase/firebase';
import { AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  testItems: Observable<any[]>;
  newItem = '';

  constructor(public navCtrl: NavController, public firebaseProvider: FirebaseProvider) {
    this.testItems = this.firebaseProvider.getList().valueChanges();
  }

  addItem(){
    this.firebaseProvider.addInfo(this.newItem);
  }

  deleteItem(id){
    console.log(id);
    this.firebaseProvider.deleteInfo(id);
  }

}
