import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import firebase from 'firebase';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { CreateAccountPage } from '../pages/create-account/create-account';
import { TestHomePage } from '../pages/test-home/test-home';
import { ResetPasswordPage } from "../pages/reset-password/reset-password";




const firebaseConfig = {
  apiKey: "AIzaSyCGbCzagTiX3RZmGXYct2YaJSZQPMcziac",
  authDomain: "alcometer-720c2.firebaseapp.com",
  databaseURL: "https://alcometer-720c2.firebaseio.com",
  projectId: "alcometer-720c2",
  storageBucket: "alcometer-720c2.appspot.com",
  messagingSenderId: "211742343446"
};

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Login', component: LoginPage },
      { title: 'List', component: ListPage },
      { title: 'Create Account', component: CreateAccountPage }


    ];
    const unsubscribe = firebase.auth().onAuthStateChanged( user => {
      if (!user) {
        this.rootPage = 'LoginPage';
        unsubscribe();
      } else { 
        this.rootPage = TestHomePage;
        unsubscribe();
      }
    });

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
