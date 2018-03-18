import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthenticatieProvider} from '../../providers/authenticatie/authenticatie'

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

  constructor(private afAuth: AuthenticatieProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  logout(){
    this.afAuth.logOut();
    this.navCtrl.push('LoginPage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestHomePage');
    this.afAuth.getCurrentuserID();
  }


}
