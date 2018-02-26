import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DatabaseTestingPage } from './database-testing';

@NgModule({
  declarations: [
    DatabaseTestingPage,
  ],
  imports: [
    IonicPageModule.forChild(DatabaseTestingPage),
  ],
})
export class DatabaseTestingPageModule {}
