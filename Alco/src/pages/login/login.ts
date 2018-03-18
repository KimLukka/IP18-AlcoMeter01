import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user';
import {CreateAccountPage } from './../create-account/create-account';
import {ResetPasswordPage} from './../reset-password/reset-password';
import { AuthenticatieProvider } from '../../providers/authenticatie/authenticatie'
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;
  constructor(private afAuth: AuthenticatieProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  async login(user: User){
   try {
    const result = this.afAuth.LoginUser(user.email, user.password);
    if(result){
      this.navCtrl.push('TestHomePage');
    }
   } 
   catch(e){
    console.error(e);
   }
  }

  createAccount(){
    this.navCtrl.push(CreateAccountPage);
  }

  resetPassword(){
    this.navCtrl.push(ResetPasswordPage);
  }

}
