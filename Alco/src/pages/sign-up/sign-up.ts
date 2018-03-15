import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthenticationProvider } from '../../providers/authentication/authentication';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {

  public signUpForm: FormGroup;
  public resetPasswordForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, public authProvider: AuthenticationProvider) {
    this.signUpForm = formBuilder.group({
      email:[''],
      password:[''],
      country:[''],
      age:['']
    });

    this.resetPasswordForm = formBuilder.group({
      email:['']
    });
  }

signUpUser(){
  this.authProvider.createNewUser(this.signUpForm.value.email, this.signUpForm.value.password, this.signUpForm.value.country, this.signUpForm.value.age)
  .then(()=>{
    this.navCtrl.setRoot(HomePage);
  });
}

resetPassword(){
  this.authProvider.resetPassword(this.resetPasswordForm.value.email);

}

}
