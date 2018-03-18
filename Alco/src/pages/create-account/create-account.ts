import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, LoadingController, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthenticatieProvider } from '../../providers/authenticatie/authenticatie';
import { TestHomePage } from '../test-home/test-home';

/**
 * Generated class for the CreateAccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({name: 'page-create-account'})
@Component({
  selector: 'page-create-account',
  templateUrl: 'create-account.html',
})
export class CreateAccountPage {
  public createAccountForm: FormGroup;
  public loading: Loading;
  constructor(public navCtrl: NavController, 
            public navParams: NavParams, 
            public authProvider: AuthenticatieProvider, 
            public formBuilder: FormBuilder,
            public loadingCtrl: LoadingController,
            public alertCtrl: AlertController
          ) {
            this.createAccountForm = formBuilder.group({
              email:[''],
              password:[''],
              country:[''],
              dateOfBirth:['']
            });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateAccountPage');
  }

  signUpUser(){
    this.authProvider.CreateNewUser(this.createAccountForm.value.email, this.createAccountForm.value.password, this.createAccountForm.value.country, this.createAccountForm.value.dateOfBirth)
  .then(()=>{
    this.navCtrl.setRoot(TestHomePage);
  });
  }


}
