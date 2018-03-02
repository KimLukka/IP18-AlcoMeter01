import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TestHomePage } from './test-home';

@NgModule({
  declarations: [
    TestHomePage,
  ],
  imports: [
    IonicPageModule.forChild(TestHomePage),
  ],
})
export class TestHomePageModule {}
