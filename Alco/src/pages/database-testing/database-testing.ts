import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import {AuthenticationProvider} from './../../providers/authentication/authentication';
import {FirebaseProvider } from './../../providers/firebase/firebase';
import { AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { auth } from 'firebase';
import { HomePage } from '../home/home';


@IonicPage()
@Component({
  selector: 'page-database-testing',
  templateUrl: 'database-testing.html',
})
export class DatabaseTestingPage {
  /*<testItems: Observable<any[]>;
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
*/
public loginForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public authProvider: AuthenticationProvider, public formBuilder: FormBuilder) {
    this.loginForm = formBuilder.group({email: [], password: []});
  }

loginUser(): void{
  this.authProvider.loginUser(this.loginForm.value.email, this.loginForm.value.password).then(
    authData => {
      this.navCtrl.setRoot(HomePage);
    }
  )
}

goToSignup(): void { 
  this.navCtrl.push('SignupPage'); 
}

}
