import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';

/**
 * Generated class for the CallPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-call',
  templateUrl: 'call.html',
})
export class CallPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private Noodnummer: CallNumber) {
  }

  public Emergency() {
  this.Noodnummer.callNumber("0483445367", true)
  .then(() => console.log('Launched dialer!'))
  .catch(() => console.log('Error launching dialer'));

  }

  
  
}

