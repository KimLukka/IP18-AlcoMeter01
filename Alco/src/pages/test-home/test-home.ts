import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the TestHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-test-home',
  templateUrl: 'test-home.html',
})
export class TestHomePage {

  constructor(private afAuth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  logout(){
    this.afAuth.auth.signOut();
    this.navCtrl.push('LoginPage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestHomePage');
  }

}
