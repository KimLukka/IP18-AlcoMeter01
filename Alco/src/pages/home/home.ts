import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {FirebaseProvider } from './../../providers/firebase/firebase';
import { AngularFireList } from 'angularfire2/database';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  testItems: AngularFireList<any>;
  newItem = '';

  constructor(public navCtrl: NavController, public firebaseProvider: FirebaseProvider) {
    this.testItems = this.firebaseProvider.getList();
  }

  addItem(){
    this.firebaseProvider.addInfo(this.newItem);
  }

  deleteItem(id){
    this.firebaseProvider.deleteInfo(id);
  }

}
