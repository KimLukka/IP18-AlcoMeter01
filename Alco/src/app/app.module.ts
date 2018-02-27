import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { DatabaseTestingPage } from '../pages/database-testing/database-testing';
import { SignUpPage } from '../pages/sign-up/sign-up';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {HttpModule} from '@angular/http';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireModule} from 'angularfire2';
import {FirebaseProvider} from './../providers/firebase/firebase';
import { AuthenticationProvider } from '../providers/authentication/authentication';

const firebaseConfig = {
  apiKey: "AIzaSyCGbCzagTiX3RZmGXYct2YaJSZQPMcziac",
  authDomain: "alcometer-720c2.firebaseapp.com",
  databaseURL: "https://alcometer-720c2.firebaseio.com",
  projectId: "alcometer-720c2",
  storageBucket: "alcometer-720c2.appspot.com",
  messagingSenderId: "211742343446"
};



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    DatabaseTestingPage,
    SignUpPage

  ],
  imports: [
    BrowserModule,
    HttpModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    DatabaseTestingPage,
    SignUpPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    FirebaseProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthenticationProvider
  ]
})
export class AppModule {}
